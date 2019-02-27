import React from 'react'
import PropTypes from 'prop-types'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import AppBar from '@material-ui/core/AppBar'
import iconNames from "../../../common/config/icon-name-config";
import Paper from "@material-ui/core/Paper";
import DefaultList from "../../../common/list/default-list";
import reducer from './reducer'
import ListRightButtonGroup from "./list-right-button-group";
import DefaultFormDialog from "../../../common/dialog/form-dialog";
import post from "../../../common/fetch/fetch";
import messageReducer from "../../../common/dialog/reducer";
import DefaultMainMenu from "../../layout/default-main-menu";
import menuNames from "../../../common/config/menu-name-config";
import Any from '../../../common/utils/any'
import buttonNames from "../../../common/config/button-name-config";
import commonNames from "../../../common/config/common-name-config";
import ListTextIcon from "./list-text-icon";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.classes = props.classes
        this.store = props.store

        this.nestListItemDelete = this.nestListItemDelete.bind(this)
        this.nestedListItemAddPerson = this.nestedListItemAddPerson.bind(this)
        this.nestedListItemAddGroup = this.nestedListItemAddGroup.bind(this)
        this.nestedListItemEdit = this.nestedListItemEdit.bind(this)
        this.nestedListItemSave = this.nestedListItemSave.bind(this)
        this.nestedListItemExpand = this.nestedListItemExpand.bind(this)
        this.nestedListItemCollapse = this.nestedListItemCollapse.bind(this)
        this.formInputChanged = this.formInputChanged.bind(this)
        this.formClose = this.formClose.bind(this)

        this.filter = this.filter.bind(this)
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
                TextIconFactory: ListTextIcon,
                RightButtonGroupFactory: ListRightButtonGroup,
                rightButtonGroup: {
                    [iconNames.groupAdd]: {
                        onClick: this.nestedListItemAddGroup,
                    },
                    [iconNames.personAdd]: {
                        onClick: this.nestedListItemAddPerson,
                    },
                    [iconNames.edit]: {
                        onClick: this.nestedListItemEdit,
                    },
                    [iconNames.delete]: {
                        onClick: (state) => {
                            console.log(state)
                            alert("The delete button is clicked")
                        }
                    },
                    [iconNames.check]: {
                        onClick: (state) => {
                            console.log(state)
                            alert("The check button is clicked")
                        }
                    },
                    [iconNames.close]: {
                        onClick: (state) => {
                            console.log(state)
                            alert("Deactivate button is clicked")
                        }
                    }
                },
                expandable: (state) => {
                    if (state == null) return false
                    if (state.data == null) return false
                    if (state.data.children == null) return false
                    if (state.data.children.length === 0) return false
                    if (state.data.type === commonNames.employee) return false

                    return true
                },
                expand: this.nestedListItemExpand,
                collapse: this.nestedListItemCollapse,
            },
            dialog: {
                services: {
                    update: 'org/modify',
                    add: 'org/add',
                    delete: 'org/delete',
                },
                toolbar: {
                    leftButtonClicked: this.formClose,
                    rightButtonGroup: {
                        [buttonNames.save]: {
                            type: 'textButton',
                            text: '保存',
                            onClick: this.nestedListItemSave,
                        },
                        [buttonNames.close]: {
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
                        visible: (state) => {
                            return Any.get(state.form, 'id') != null
                        }
                    },
                    parent: {
                        label: '所属部门',
                        disabled: true,
                        visible: (state) => {
                            return Any.get(state.form, 'parent') != null
                        }
                    },
                    primaryText: {
                        label: (state) => {
                            const type = Any.get(state.form, 'type')
                            return (commonNames.department === type) ? '部门名称' : '姓名'
                        },
                        className: 'formDefaultTextField2',
                        handleChange: this.formInputChanged,
                    },
                    secondaryText: {
                        label: (state) => {
                            const type = Any.get(state.form, 'type')
                            return (commonNames.department === type) ? '部门职能' : '岗位'
                        },
                        className: 'formDefaultTextField2',
                        handleChange: this.formInputChanged
                    }
                }
            },
        }
    }

    filter(value) {
        this.store.dispatch(reducer.createAction(reducer.types.filter, {value}))
    }

    nestListItemDelete(data) {

    }

    nestedListItemAddPerson(data) {
        const {id, path, level, type, primaryText, secondaryText} = data
        this.store.dispatch(reducer.createAction(reducer.types.openAddPersonDialog, {id, path, level, type, primaryText, secondaryText}))
    }

    nestedListItemAddGroup(data) {
        const {id, path, level, type, primaryText, secondaryText} = data
        this.store.dispatch(reducer.createAction(reducer.types.openAddGroupDialog, {id, path, level, type, primaryText, secondaryText}))
    }

    nestedListItemEdit(data) {
        const {id, path, level, type, primaryText, secondaryText} = data
        this.store.dispatch(reducer.createAction(reducer.types.openEditDialog, {id, path, level, type, primaryText, secondaryText}))
    }

    nestedListItemSave() {
        const record = DefaultFormDialog.unboxing(this.store.getState().organization.dialog.form)
        post(this.handlers.dialog.services[this.store.getState().organization.mode], record, this.updateSuccessfully, this.updateFailed)
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
        if (commonNames.update === mode || commonNames.add === mode) {
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
                    <DefaultList classes={this.classes} state={this.store.getState().organization.nestedList} handlers={this.handlers.nestedList}/>
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}