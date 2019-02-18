import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'

import {styles} from './styles'
import TopBar from './top-bar'
import MainMenu from './main-menu'
import Content from '../content/content'
import MessageDialog from '../../common/message/message-dialog'
import LoginForm from '../account/login-form'

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
    palette: {
        secondary: {
            light: grey[100],
            main: grey['A200'],
            dark: grey['A700'],
            contrastText: '#fff',
        }
    },
    typography: { useNextVariants: true },
});

function Dashboard({classes, store}) {
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.contentDefaultHead} >
                <CssBaseline />
                <TopBar classes={classes} store={store} />
                <MainMenu classes={classes} store={store} />
                <Content classes={classes} store={store} />
                <LoginForm classes={classes} store={store}/>
                <MessageDialog classes={classes} store={store}/>
            </div>
        </MuiThemeProvider>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}


export default withStyles(styles)(Dashboard)