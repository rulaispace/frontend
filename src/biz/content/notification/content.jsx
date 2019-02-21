import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultTable from '../../../common/table/default-table'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import Paper from "@material-ui/core/Paper";
import reducer from './reducer'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.store = props.store

        this.filter = this.filter.bind(this)

        this.handlers = {
            toolbar: {
                searchInputChanged: this.filter,
            }
        }
    }

    filter(value) {
        this.store.dispatch(reducer.createAction(reducer.types.filter, {value}))
    }

    render() {
        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={this.classes} state={this.store.getState().notification.toolbar} handlers={this.handlers.toolbar}/>
                    </AppBar>
                </div>
                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={this.store.getState().notification.table} />
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}