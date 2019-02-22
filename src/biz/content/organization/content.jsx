import React from 'react'
import PropTypes from 'prop-types'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import AppBar from '@material-ui/core/AppBar'
import iconNames from "../../../common/config/icon-name-config";
import Paper from "@material-ui/core/Paper";
import DefaultNestedList from "../../../common/list/default-nested-list";
import reducer from './reducer'

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.classes = props.classes
        this.store = props.store

        this.nestedListItemExpand = this.nestedListItemExpand.bind(this)
        this.nestedListItemCollapse = this.nestedListItemCollapse.bind(this)

        this.handlers = {
            toolbar: {
                searchInputChanged: this.filter,
                rightButtonGroup: {
                    group: [
                        {
                            key: iconNames.folder,
                            onClick: ()=> {
                                alert("The query button is clicked")
                            },
                        },
                        {
                            key: iconNames.upload,
                            onClick: ()=> {
                                alert("The upload button is clicked")
                            },
                        }
                    ]
                }
            },
            nestedList: {
                expand: this.nestedListItemExpand,
                collapse: this.nestedListItemCollapse,
            }
        }
    }

    nestedListItemExpand(data) {
        console.log(this)
        this.store.dispatch(reducer.createAction(reducer.types.expand, data))
    }

    nestedListItemCollapse(data) {
        console.log(this)
        this.store.dispatch(reducer.createAction(reducer.types.collapse, data))
    }

    render() {
        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={this.classes} state={this.store.getState().organization.toolbar} handlers={this.handlers.toolbar}/>
                    </AppBar>
                </div>
                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultNestedList classes={this.classes} state={this.store.getState().organization.nestedList} handlers={this.handlers.nestedList}/>
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}