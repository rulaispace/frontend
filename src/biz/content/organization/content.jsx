import React from 'react'
import PropTypes from 'prop-types'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import AppBar from '@material-ui/core/AppBar'
import iconNames from "../../../common/config/icon-name-config";
import Paper from "@material-ui/core/Paper";
import DefaultNestedList from "../../../common/list/default-nested-list";
import reducer from './reducer'
import ListRightButtonGroup from "./list-right-button-group";
import DefaultFormDialog from "../../../common/dialog/form-dialog";
import post from "../../../common/fetch/fetch";
import messageReducer from "../../../common/dialog/reducer";
import DefaultMainMenu from "../../layout/default-main-menu";
import menuNames from "../../../common/config/menu-name-config";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.classes = props.classes
        this.store = props.store

        this.nestedListItemEdit = this.nestedListItemEdit.bind(this)
        this.nestedListItemSave = this.nestedListItemSave.bind(this)
        this.nestedListItemExpand = this.nestedListItemExpand.bind(this)
        this.nestedListItemCollapse = this.nestedListItemCollapse.bind(this)
        this.formInputChanged = this.formInputChanged.bind(this)
        this.formClose = this.formClose.bind(this)

        this.updateFailed = this.updateFailed.bind(this)
        this.updateSuccessfully = this.updateSuccessfully.bind(this)

        this.handlers = {
            toolbar: {
                searchInputChanged: this.filter,
                rightButtonGroup: {
                    [iconNames.folder]: {
                        onClick: ()=> {
                            alert("The open folder button is clicked")
                        }
                    },
                    [iconNames.upload]: {
                        onClick: ()=> {
                            alert("The upload button is clicked")
                        },
                    }
                }
            },
            nestedList: {
                RightButtonGroupFactory: ListRightButtonGroup,
                rightButtonGroup: {
                    [iconNames.groupAdd]: {
                        onClick: (state) => {
                            alert("The add group button is clicked")
                        }
                    },
                    [iconNames.personAdd]: {
                        onClick: (state) => {
                            alert("The add person button is clicked")
                        }
                    },
                    [iconNames.edit]: {
                        onClick: this.nestedListItemEdit,
                    },
                    [iconNames.delete]: {
                        onClick: (state) => {
                            alert("The delete button is clicked")
                        }
                    }
                },
                expand: this.nestedListItemExpand,
                collapse: this.nestedListItemCollapse,
            },
            dialog: {
                services: {
                    update: 'org/modify',
                    delete: 'org/delete',
                },
                toolbar: {
                    leftButtonClicked: this.formClose,
                    rightButtonGroup: {
                        [iconNames.folder]: {
                            type: 'textButton',
                            text: '保存',
                            onClick: this.nestedListItemSave,
                        },
                        [iconNames.upload]: {
                            type: 'textButton',
                            text: '取消',
                            onClick: this.formClose,
                        }
                    },
                },
                form: {
                    id: {
                        label: '编号',
                        disabled: true,
                    },
                    primaryText: {
                        label: '组织机构名称',
                        className: 'formDefaultTextField2',
                        handleChange: this.formInputChanged,
                    },
                    secondaryText: {
                        label: '组织机构职能',
                        className: 'formDefaultTextField2',
                        handleChange: this.formInputChanged
                    }
                }
            },
        }
    }

    nestedListItemEdit(data) {
        const {id, level, primaryText, secondaryText} = data
        this.store.dispatch(reducer.createAction(reducer.types.openEditDialog, {id, level, primaryText, secondaryText}))
    }

    nestedListItemSave() {
        const record = DefaultFormDialog.unboxing(this.store.getState().organization.dialog.form)
        post(this.handlers.dialog.services.update, record, this.updateSuccessfully, this.updateFailed)
    }

    updateSuccessfully() {
        DefaultMainMenu.reloading(this.store, menuNames.org);
    }

    updateFailed(err) {
        this.store.dispatch(messageReducer.createAction(messageReducer.types.show, err))
    }

    nestedListItemExpand(data) {
        this.store.dispatch(reducer.createAction(reducer.types.expand, data))
    }

    nestedListItemCollapse(data) {
        this.store.dispatch(reducer.createAction(reducer.types.collapse, data))
    }

    formInputChanged(id, value) {
        this.store.dispatch(reducer.createAction(reducer.types.modifyFormInput, {id, value}))
    }

    formClose() {
        this.store.dispatch(reducer.createAction(reducer.types.closeEditDialog))
    }

    render() {
        const mode = this.store.getState().organization.mode
        if ('edit' === mode) { // 打开修改页面
            return <DefaultFormDialog classes={this.classes} state={this.store.getState().organization.dialog} handlers={this.handlers.dialog}/>
        }

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