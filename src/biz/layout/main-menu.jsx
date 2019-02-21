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
import config from "./config";

import post from '../../common/fetch/fetch'
import StoreFactory from "../../common/redux/store-factory";
import MessageReducer from "../../common/message/reducer";

import JSON from 'circular-json'

function MenuItemList({state, onClick}) {
    const {header, items} = state
    return (
        <div>
            {header ? (<ListSubheader inset>{header}</ListSubheader>) : null}
            {items.map(({key: name, label, loadingUrl}) => (
                <ListItem
                    button
                    key={name}
                    onClick={(e) => {
                        e.preventDefault()
                        onClick(name, loadingUrl)
                    }}
                >
                    <ListItemIcon>
                        <IconStore iconKey={name}/>
                    </ListItemIcon>
                    <ListItemText  primary={label}/>
                </ListItem>
            ))}
        </div>
    )
}

MenuItemList.propTypes = {
    state: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}


function menuClicked(store) {
    return (name, loadingUrl) => {
        const loadSuccess = function(store) {
            return function(payload) {
                const childReducer = StoreFactory.getReducer(name)
                store.dispatch(childReducer.createAction(childReducer.types.loading, payload))
                store.dispatch(reducer.createAction(reducer.types.navigate, {name}))
            }
        }

        const loadFail = function(store) {
            return function(err) {
                const {details} = err
                store.dispatch(MessageReducer.show('数据加载失败：', details))
            }
        }

        store.getState().layout.navigator = null;
        post(loadingUrl, {}, loadSuccess(store), loadFail(store))
    }
}

export default function MainMenu({classes, store}) {
    const {rule} = store.getState().account
    const {userMenu, adminMenu} = config

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
                        store.dispatch(reducer.close())
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />

            {('admin' === rule || 'user' === rule) ? (<MenuItemList state={userMenu} onClick={menuClicked(store)}/>) : null}
            {'admin'===rule ? (<Divider />) : null}
            {'admin'===rule ? (<MenuItemList state={adminMenu} onClick={menuClicked(store)} />) : null}
        </Drawer>
    )
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}