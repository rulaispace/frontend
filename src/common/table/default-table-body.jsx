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
            },
            pagination: {
                page,
                rowsPerPage,
            },
            body,
        } = this.state

        const rowList = pageable ? (
            body.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        ) : body

        return (
            <TableBody>
                {rowList.map(row => {
                    return (
                        <DefaultTableRow
                            key={row.idKey}
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
