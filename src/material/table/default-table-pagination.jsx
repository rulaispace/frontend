import React from 'react'
import PropTypes from 'prop-types'
import TablePagination from "@material-ui/core/TablePagination";

export default class DefaultTablePagination extends React.Component {
    constructor(props) {
        super(props)

        this.state = props.state
        this.classes = props.classes
    }

    render() {
        const {
            pagination: {
                page,
                rowsPerPage,
            },
            body,
        } = this.state

        return (
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={body.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage={'每页记录数:'}
                SelectProps={{
                    native: true,
                }}
                onChangePage= {f=>f}
                onChangeRowsPerPage={f=>f}
            />
        )
    }
}

DefaultTablePagination.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}