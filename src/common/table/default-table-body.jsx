import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import DefaultTableRow from "./default-table-row";

export default class DefaultTableBody extends React.Component {
    constructor(props) {
        super(props)

        this.state = props.state
        this.classes = props.classes
    }

    render() {
        const {
            feature: {
                pageable,
                withFilter,
            },
            pagination: {
                page,
                rowsPerPage,
            },
            filter,
            body,
        } = this.state

        const dataList = withFilter ? (body.filter((row) => {
            for (const columnName in row) {
                if (filter[columnName]) {
                    return row[columnName].indexOf(filter[columnName]) !== -1
                }
            }
            return true
        })) : body

        const rowList = pageable ? (
            dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        ) : dataList

        return (
            <TableBody>
                {rowList.map((row, i) => {
                    return (
                        <DefaultTableRow
                            key={i}
                            state={{
                                ...this.state,
                                body: null,
                                row,
                            }}
                            classes={this.classes}/>
                    )
                })}
            </TableBody>
        )
    }
}

DefaultTableBody.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}
