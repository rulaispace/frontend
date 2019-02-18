import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultTable from '../../../common/table/default-table'
import DefaultToolbar from '../../../common/toolbar/default-toolbar'
import Paper from "@material-ui/core/Paper";

const ToolbarState = () => ({
    feature: {
        disableGutters: true,
        showInput: true,
        showInputIcon: true,
    },
    input: {
        placeholder: '输入关键字查询',
    },
})

// 默认的表格属性
const TableState = () => ({
    feature: {
        pageable: true,
    },
    pagination: {
    },
    header: [
        {
            id: 'title',
            linkable: true,
            label: '标题',
            width: '40%',
            onClick: f=>f,
            filter: f=>f,
        },
        {
            id: 'type',
            linkable: false,
            label: '类型',
            width: '20%',
            onClick: f=>f,
            filter: f=>f,
        },
        {
            id: 'announcer',
            linkable: false,
            label: '发布人',
            width: '20%',
            onClick: f=>f,
            filter: f=>f,
        },
        {
            id: 'announceDate',
            linkable: false,
            label: '发布日期',
            width: '20%',
            onClick: f=>f,
            filter: f=>f,
        }
    ],
})

// 根据传入数据组装表格状态
export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.toolbarState = ToolbarState()
        this.tableState = TableState()

        this.classes = props.classes
        this.store = props.store
    }

    render() {
        const {
            notification: {
                dataList,
            }
        } = this.store.getState()


        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={this.classes} state={this.toolbarState}/>
                    </AppBar>
                </div>
                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={({
                        ...this.tableState,
                        body: dataList,
                    })} />
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}