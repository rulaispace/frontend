import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import DefaultTable from '../../../common/table/default-table'
import Paper from '@material-ui/core/Paper'
import reducer from './reducer'
import commonNames from "../../../common/config/common-name-config";
import iconNames from "../../../common/config/icon-name-config";

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
                rightButtonGroup: {
                    [iconNames.add]: {
                        onClick: ()=> {
                            alert("The open folder button is clicked")
                        }
                    }
                }
            },
            table: {
                operator: {
                    onClick: function(ordinal) {
                        if (ordinal === commonNames.resetPassword) {
                            return function() {
                                alert('Reset password is clicked')
                            }
                        }
                        if (ordinal === commonNames.deactivate) {
                            return function() {
                                alert('Deactivate is clicked')
                            }
                        }
                        if (ordinal === commonNames.activate) {
                            return function() {
                                alert('Activate is clicked')
                            }
                        }

                        return f=>f
                    },
                    label: function(ordinal) {
                        if (ordinal === commonNames.resetPassword) {
                            return '重置密码'
                        }
                        if (ordinal === commonNames.deactivate) {
                            return '注销'
                        }
                        if (ordinal === commonNames.activate) {
                            return '激活'
                        }

                        return ordinal
                    }
                },
                state: {
                    label: function(ordinal) {
                        if (ordinal === commonNames.valid)
                            return '有效'
                        if (ordinal === commonNames.invalid)
                            return '注销'

                        return ordinal
                    },
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
                        <DefaultToolbar classes={this.classes} state={this.store.getState().rule.toolbar} handlers={this.handlers.toolbar}/>
                    </AppBar>
                </div>
                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={this.store.getState().rule.table} handlers={this.handlers.table}/>
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}