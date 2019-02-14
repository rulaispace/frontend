import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LayoutReducer from './reducer'
import config from './config'
import IconStore from "../material/icon-store"

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'


function MenuItemList({state, navigateTo}) {
    const {header, items} = state
    return (
        <div>
            {header ? (<ListSubheader inset>{header}</ListSubheader>) : null}
            {items.map(({key, label}) => (
                <ListItem
                    button
                    key={key}
                    onClick={() => {
                        navigateTo(key)
                    }}
                >
                    <ListItemIcon>
                        <IconStore iconKey={key}/>
                    </ListItemIcon>
                    <ListItemText  primary={label}/>
                </ListItem>
            ))}
        </div>
    )
}

MenuItemList.propTypes = {
    state: PropTypes.object.isRequired,
    navigateTo: PropTypes.func.isRequired,
}

export default function MainMenu({classes, store}) {
    const {
        account: {
            rule = 'user'
        }
    } = store.getState()

    const {user, admin} = config

    const navigateTo = (key) => {
        store.dispatch(LayoutReducer.navigateTo(key))
    }

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
                        store.dispatch(LayoutReducer.close())
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />
            <MenuItemList state={user} navigateTo={navigateTo}/>

            {'admin'===rule ? <Divider /> : null}
            {'admin'===rule ? <MenuItemList state={admin} navigateTo={navigateTo} /> : null}
        </Drawer>
    )
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}