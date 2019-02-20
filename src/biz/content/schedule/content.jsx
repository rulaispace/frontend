import React from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import iconNames from '../../../common/config/icon-name-config'
import DefaultToolbar from "../../../common/toolbar/default-toolbar";
import ToolbarRightButtonGroup from "./toolbar-right-button-group";
import DefaultTable from "../../../common/table/default-table";
import Paper from "@material-ui/core/Paper";

// 默认的工具栏属性
const ToolbarState = () => ({
    feature: {
        disableGutters: true,
        showInput: false,
        showInputIcon: false,
        showRightButtonGroup: true,
        type: iconNames.SCHEDULE_DAY_TYPE,
    },
    factory: {
        RightButtonGroupFactory: ToolbarRightButtonGroup,
    },
    input: {
        iconKey: iconNames.filterList,
        placeholder: '选择成员过滤',
        defaultValue: '',
    },
})


function cellStyles(row, col) {
    if (col.id !== 'time') return 'tableCellDefault'
    if (row.time < 12) return 'scheduleBackgroundLightYellow'
    if (row.time < 18) return 'scheduleBackgroundDarkYellow'
    return 'scheduleBackgroundBlue'
}

// 默认的表格属性
const TableState = () => ({
    feature: {
        pageable: false,
        cellStyles: cellStyles,
    },
    pagination: {
    },
    header: [
        {
            id: 'time',
            numeric: true,
            disablePadding: true,
            label: '时间',
            width: '8%',
        },
        {
            id: 'event',
            disablePadding: false,
            width: '92%',
            linkable: true,
            onClick: () => {
                alert('I am clicked.')
            },
        },
    ]
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
            schedule: {
                dataList
            }
        } = this.store.getState()

        return (
            <main className={this.classes.contentDefaultRoot}>
                <div className={this.classes.contentDefaultAppbarSpacer} />
                <div className={this.classes.contentDefaultHead}>
                    <AppBar
                        className={this.classes.contentDefaultAppbar}
                        position='static'
                        color='secondary'
                        elevation={0}
                    >
                        <DefaultToolbar classes={this.classes} state={this.toolbarState} />
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