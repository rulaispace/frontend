import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import DefaultTableHead from "./default-table-head";
import DefaultTableBody from "./default-table-body";
import DefaultTablePagination from "./default-table-pagination";
import {modifyWithDef} from "../utils/store-state-modifier";

const defaultState = {
    // default value for all switch
    feature: {
        rootClassName: 'tableDefaultRoot',
        contentClassName: 'tableDefaultContent',
        tableClassName: 'tableDefault',
        pageable: false,
        sortable: false,
        withFilter: false,
    },
    // default value for paginate
    pagination: {
        page: 0,
        rowsPerPage: 5,
    }
}

const defaultHandlers = {
    cellStyles: () => 'tableCellDefault',
}

const defaultHeaderColState = {
    numeric: false,
    disablePadding: false,
    linkable: false,
}


function modify(state) {
    let result = modifyWithDef(state, defaultState)
    result.header = result.header.map(col => modifyWithDef(col, defaultHeaderColState))
    return result;
}

export default class DefaultTable extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.state = modify(props.state)
        this.handlers = modifyWithDef(props.handlers, defaultHandlers)
    }

    render() {
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
                        <DefaultTableHead state={this.state} classes={this.classes} handlers={this.handlers}/>
                        <DefaultTableBody state={this.state} classes={this.classes} handlers={this.handlers}/>
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
    handlers: PropTypes.object.isRequired,
}