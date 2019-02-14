import React from 'react'
import PropTypes from 'prop-types'
import Reducer from './reducer'
import Naming from '../../material/name'
import DefaultToolbar from '../../material/toolbar/default-toolbar'
import AppBar from '@material-ui/core/AppBar'
import DefaultNestedList from "../../material/nestedlist/default-nested-list";
import Paper from "@material-ui/core/Paper";

const ToolbarState = () => ({
    feature: {
        disableGutters: true,
        showInput: true,
        showInputIcon: true,
        showRightButtonGroup: true,
    },
    input: {
        iconKey: Naming.ICON_ATTACHMENT,
        placeholder: '输入关键字查询',
        disabled: true,
    },
    rightButtonGroup: {
        group: [
            {
                key: Naming.ICON_FOLDER,
                onClick: ()=> {
                    this.onQuery()
                },
            },
            {
                key: Naming.ICON_UPLOAD,
                onClick: ()=> {
                    this.onReset()
                },
            }
        ]
    }
})

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.toolbarState = ToolbarState()
    }

    onQuery() {
        const {store} = this.props
        store.dispatch(Reducer.query(this.searchInputRef.current.value))
    }

    onReset() {
        const {store} = this.props
        store.dispatch(Reducer.reset())

        // 目前没有找到合适的方法，通过修改state状态改变页面展示，暂时通过直接清空修改页面数据
        this.searchInputRef.current.value = ''
    }

    render() {
        const {classes, store} = this.props

        return (
            <main className={classes.contentDefaultRoot}>
                <div className={classes.contentDefaultAppbarSpacer} />
                <div className={classes.contentDefaultHead}>
                    <AppBar className={classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={classes} state={this.toolbarState}/>
                    </AppBar>
                </div>
                <Paper className={classes.contentDefaultBody}>
                    <DefaultNestedList classes={classes} state={{}}/>
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}