import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import DefaultTableRow from "./default-table-row";
import DefaultTable from './default-table'

export default function DefaultTableBody({state, classes, handlers}) {
    const {
        feature: {
            pageable,
        },
        pagination: {
            page,
            rowsPerPage,
        },
    } = state

    const dataList = DefaultTable.filter(state)

    const rowList = pageable ? (
        dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    ) : dataList

    return (
        <TableBody>
            {rowList.map((row, index) =>(
                <DefaultTableRow
                    key={index}
                    state={{
                        ...state,
                        body: null,
                        row,
                    }}
                    classes={classes}
                    handlers={handlers}
                />
            ))}
        </TableBody>
    )
}

DefaultTableBody.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}
