import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LockIcon from '@material-ui/icons/Lock'
import PersonIcon from '@material-ui/icons/Person'
import menuReducer from './reducer';
import accountReducer from '../account/reducer'
import menuItems from "../../common/config/menu-items-config";
import StoreFactory from "../../common/redux/store-factory";

function RightIcons({token, logout, login}) {
    return token ? (<IconButton color='inherit' onClick={logout}><PersonIcon /></IconButton>)
        : (<IconButton color='inherit' onClick={login}><LockIcon /></IconButton>)
}

RightIcons.propTypes = {
    token: PropTypes.string,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
}

export default function TopBar({classes, store}) {
    const {
        layout: {
            open,
            navigator,
        },
        account: {
            token,
        }
    } = store.getState()


    const {employee, administrator} = menuItems
    let subTitle = token ?
        ([...employee.items, ...administrator.items].reduce(
            (title, {id, label}) => {
                return title ? title : ((id===navigator) ? label : null)
            }, null
        ))
        : '首页'

    let title = `企业管理系统 / ${subTitle ? subTitle : '首页'}`

    return (
        <AppBar
            position='absolute'
            className={classNames(classes.appBar, open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!open} className={classes.toolbar}>
                <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={() => {
                        store.dispatch(menuReducer.createAction(menuReducer.types.open))
                    }}
                    className={classNames(
                        classes.menuButton,
                        open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component='h1'
                    variant='h6'
                    color='inherit'
                    noWrap
                    className={classes.title}
                >
                    {title}
                </Typography>
                <RightIcons
                    token={token}
                    login={() => {store.dispatch(accountReducer.createAction(accountReducer.types.open))}}
                    logout={() => {
                        StoreFactory.clear()
                        store.dispatch(accountReducer.createAction(accountReducer.types.logout))
                    }}
                />
            </Toolbar>
        </AppBar>
    )
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}