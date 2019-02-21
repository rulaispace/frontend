import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import DefaultTableHead from "./default-table-head";
import DefaultTableBody from "./default-table-body";
import {deepOverride} from "../../common/utils/object";
import DefaultTablePagination from "./default-table-pagination";
import {modifyWithDef} from "../utils/store-state-modifier";

const defaultTableState = {
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
    }
}

const defaultHeaderColState = {
    numeric: false,
    disablePadding: false,
    linkable: false,
}


function modify(state) {
    let result = modifyWithDef(state, defaultTableState)
    result.header = result.header.map(col => modifyWithDef(col, defaultHeaderColState))
    return result;
}

export default class DefaultTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = modify(props.state)
        this.classes = props.classes
    }

    render() {
        console.log('The data in table: ' + JSON.stringify(this.state))
        const {
            feature: {
                pageable,
                rootClassName,
                contentClassName,
                tableClassName,
            },
        } = this.state

        return (
            <div className={this.classes[rootClassName]}>
                <div className={this.classes[contentClassName]}>
                    <Table className={this.classes[tableClassName]}>
                        <DefaultTableHead state={this.state} classes={this.classes} />
                        <DefaultTableBody state={this.state} classes={this.classes} />
                    </Table>
                </div>
                {
                    pageable ? (
                        <DefaultTablePagination state={this.state} classes={this.classes}/>
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