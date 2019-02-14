import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import DefaultTableHead from "./default-table-head";
import DefaultTableBody from "./default-table-body";
import {deepOverride} from "../../common/object";
import DefaultTablePagination from "./default-table-pagination";

const DefaultTableState = {
    // default value for all switch
    feature: {
        rootClassName: 'tableDefaultRoot',
        contentClassName: 'tableDefaultContent',
        tableClassName: 'tableDefault',
        cellStyles: () => 'tableCellDefault',
        pageable: false,
        sortable: false,
    },
    // default value for paginate
    pagination: {
        page: 0,
        rowsPerPage: 5,
    },
    header: [

    ],
    body: [

    ],
}

const DefaultTableHeaderState = {
    numeric: false,
    disablePadding: false,
    linkable: false,
}

const decorate = ({feature, pagination, header, body}) => ({
    feature: deepOverride(DefaultTableState.feature, feature),
    pagination: deepOverride(DefaultTableState.pagination, pagination),
    header: header.map(col => deepOverride(DefaultTableHeaderState, col)),
    body,
})

export default class DefaultTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = props.state
        this.classes = props.classes
    }

    render() {
        const state = decorate(this.state)
        const {
            feature: {
                pageable,
                rootClassName,
                contentClassName,
                tableClassName,
            },
        } = state

        return (
            <div className={this.classes[rootClassName]}>
                <div className={this.classes[contentClassName]}>
                    <Table className={this.classes[tableClassName]}>
                        <DefaultTableHead state={state} classes={this.classes} />
                        <DefaultTableBody state={state} classes={this.classes} />
                    </Table>
                </div>
                {
                    pageable ? (
                        <DefaultTablePagination state={state} classes={this.classes}/>
                    ) : null
                }
            </div>
        )
    }
}

DefaultTable.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}