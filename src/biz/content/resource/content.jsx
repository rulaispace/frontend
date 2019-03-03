import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultToolbar from "../../toolbar/default-toolbar";
import DefaultTable from "../../table/default-table";
import reducer from './reducer'
import commonNames from "../../../common/config/common-name-config";
import Paper from "@material-ui/core/Paper";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.classes = props.classes
        this.store = props.store

        this.filter = this.filter.bind(this)
        this.changeTablePage = this.changeTablePage.bind(this)
        this.changeRowsPerPage = this.changeRowsPerPage.bind(this)

        this.handlers = {
            toolbar: {
                searchInputChanged: this.filter,
            },
            table: {
                operator: {
                    onClick: function(ordinal) {
                        if (ordinal === commonNames.modify) {
                            return function() {
                                alert('Modify is clicked.')
                            }
                        }
                        if (ordinal === commonNames.delete) {
                            return function() {
                                alert('Delete is clicked')
                            }
                        }

                        return f=>f
                    },
                    label: function(ordinal) {
                        if (ordinal === commonNames.modify)
                            return '修改'
                        if (ordinal === commonNames.delete)
                            return '删除'
                        return ordinal
                    }
                },
                pagination: {
                    changePage: this.changeTablePage,
                    changeRowsPerPage: this.changeRowsPerPage,
                },
            }
        }
    }

    filter(value) {
        this.store.dispatch(reducer.createAction(reducer.types.filter, {value}))
    }

    changeTablePage(event, page) {
        this.store.dispatch(reducer.createAction(reducer.types.changePage, {page}))
    }

    changeRowsPerPage(event) {
        this.store.dispatch(reducer.createAction(reducer.types.changeRowsPerPage, {rowsPerPage: parseInt(event.target.value, 10)}))
    }

    render() {
        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={this.classes} state={this.store.getState().resource.toolbar} handlers={this.handlers.toolbar}/>
                    </AppBar>
                </div>

                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={this.store.getState().resource.table} handlers={this.handlers.table}/>
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}