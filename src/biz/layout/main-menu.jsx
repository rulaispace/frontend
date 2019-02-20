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

function MenuItemList({state, navigate}) {
    const {header, items} = state
    return (
        <div>
            {header ? (<ListSubheader inset>{header}</ListSubheader>) : null}
            {items.map(({key: name, label}) => (
                <ListItem
                    button
                    key={name}
                    onClick={() => {
                        navigate(name)
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
    navigate: PropTypes.func.isRequired,
}


function navigate(store) {
    return (name) => {
        store.dispatch(reducer.createAction(reducer.types.navigate, {name}))
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

            {('admin' === rule || 'user' === rule) ? (<MenuItemList state={userMenu} navigate={navigate(store)}/>) : null}
            {'admin'===rule ? (<Divider />) : null}
            {'admin'===rule ? (<MenuItemList state={adminMenu} navigate={navigate} />) : null}
        </Drawer>
    )
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}