import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import reducer from './reducer'
import IconStore from "../../common/utils/icon-store"

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import menuItems from "../../common/config/menu-items-config";

import post from '../../common/fetch/fetch'
import StoreFactory from "../../common/redux/store-factory";
import messageReducer from "../../common/dialog/reducer";

function DefaultMenuList({state, onClick}) {
    const {header, items} = state
    return (
        <div>
            {header ? (<ListSubheader inset>{header}</ListSubheader>) : null}
            {items.map(({id, label, loadingUrl}) => (
                <ListItem
                    button
                    key={id}
                    onClick={(e) => {
                        e.preventDefault()
                        onClick(id, loadingUrl)
                    }}
                >
                    <ListItemIcon>
                        <IconStore iconKey={id}/>
                    </ListItemIcon>
                    <ListItemText  primary={label}/>
                </ListItem>
            ))}
        </div>
    )
}

DefaultMenuList.propTypes = {
    state: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

const loading = function(store) {
    return (name, loadingUrl) => {
        store.getState().layout.navigator = null;
        post(loadingUrl, {}, loadSuccess(store, name), loadFail(store))
    }
}

const loadSuccess = function(store, name) {
    return function(payload) {
        const childReducer = StoreFactory.getReducer(name)
        store.dispatch(childReducer.createAction(childReducer.types.loading, payload))
        store.dispatch(reducer.createAction(reducer.types.navigate, {name}))
    }
}

const loadFail = function(store) {
    return function(err) {
        store.dispatch(messageReducer.createAction(messageReducer.types.show, err))
    }
}

function DefaultMainMenu({classes, store}) {
    return (
        <Drawer
            variant='permanent'
            classes={{
                paper: classNames(classes.drawerPaper, !store.getState().layout.open && classes.drawerPaperClose),
            }}
            open={store.getState().layout.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton
                    onClick={() => {
                        store.dispatch(reducer.createAction(reducer.types.close))
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            {('admin' === store.getState().account.rule || 'user' === store.getState().account.rule) ? (
                <DefaultMenuList
                    state={menuItems.employee}
                    onClick={loading(store)}
                />) : null
            }
            {'admin'=== store.getState().account.rule ? (<Divider />) : null}
            {'admin'=== store.getState().account.rule ? (
                <DefaultMenuList
                    state={menuItems.administrator}
                    onClick={loading(store)}
                />) : null
            }
        </Drawer>
    )
}

DefaultMainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}

DefaultMainMenu.reloading = function(store, name) {
    store.getState().layout.navigator = null;
    let loadingUrl = null;
    for (const property in menuItems.employee.items) {
        if (menuItems.employee.items[property].id === name) {
            loadingUrl = menuItems.employee.items[property].loadingUrl
            break
        }
    }

    if (loadingUrl == null) {
        for (const property in menuItems.administrator.items) {
            if (menuItems.administrator.items[property].id === name) {
                loadingUrl = menuItems.administrator.items[property].loadingUrl
                break
            }
        }
    }

    post(loadingUrl, {}, loadSuccess(store, name), loadFail(store))
}

export default DefaultMainMenu