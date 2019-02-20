import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import DefaultToolbar from "../../../common/toolbar/default-toolbar";
import DefaultTable from "../../../common/table/default-table";
import Paper from "@material-ui/core/Paper";
import {deepOverride} from "../../../common/utils/object";
import reducer from './reducer'

const toolbarStateCreator = (delta) => (
    deepOverride(
        {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入关键字查询',
            }
        }, delta
    )
)

// 默认的表格属性
const tableStateCreator = (delta) => (
    deepOverride(
        {
            feature: {
                pageable: true,
                withFilter: true,
            },
            header: [
                {
                    id: 'name',
                    label: '公告名称',
                    width: '30%',
                },
                {
                    id: 'type',
                    label: '类型',
                    width: '15%',
                },
                {
                    id: 'releaseDate',
                    label: '发布时间',
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
        }, delta
    )
)

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.store = props.store
        this.classes = props.classes
        this.query = this.query.bind(this)

        const {
            announcement: {
                query,
                dataList,
            }
        } = this.store.getState()

        const toolbarDelta = {
            input: {
                defaultValue: query,
                onChange: this.query,
            }
        }

        const tableDelta = {
            filter: {
                // 使用查询条件过滤数据
                name: query,
            }
        }
        this.toolbarState = toolbarStateCreator(toolbarDelta)
        this.tableState = {
            ...tableStateCreator(tableDelta),
            body: dataList,
        }
    }

    query(condition) {
        this.store.dispatch(reducer.createAction(reducer.types.query, {condition}))
    }

    render() {
        const {
            announcement: {
                query,
            }
        } = this.store.getState()

        this.toolbarState.input.defaultValue = query
        this.tableState.filter.name=query

        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0} >
                        <DefaultToolbar classes={this.classes} state={this.toolbarState}/>
                    </AppBar>
                </div>
                <Paper className={this.classes.contentDefaultBody}>
                    <DefaultTable classes={this.classes} state={this.tableState} />
                </Paper>
            </main>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
}