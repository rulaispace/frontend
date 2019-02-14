import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultToolbar from "../../material/toolbar/default-toolbar";
import DefaultTable from "../../material/table/default-table";

const ToolbarState = () => ({
    feature: {
        disableGutters: true,
        showInput: true,
        showInputIcon: true,
    },
    input: {
        placeholder: '输入关键字查询',
    }
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
            id: 'name',
            label: '资源名称',
            width: '30%',
        },
        {
            id: 'code',
            label: '资源编号',
            width: '15%',
        },
        {
            id: 'createDate',
            label: '创建时间',
            width: '20%',
        },
        {
            id: 'state',
            label: '状态',
            width: '15%',
        },
        {
            id: 'operator',
            label: '操作',
            width: '20%',
            linkable: true,
        },
    ]
})

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.toolbarState = ToolbarState()
        this.tableState = TableState()

        this.store = props.store
        this.classes = props.classes
    }

    render() {
        const {
            resource: {
                dataList
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
                <div className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={({
                        ...this.tableState,
                        body: dataList,
                    })} />
                </div>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}