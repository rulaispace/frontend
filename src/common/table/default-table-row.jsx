import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import DefaultTableCell from "./default-table-cell";

export default class DefaultTableRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = props.state
        this.classes = props.classes
        this.handlers = props.handlers
    }

    render() {
        const {header} = this.state

        return (
            <TableRow>
                {header.map((col, i) => (
                    <DefaultTableCell
                        key={i}
                        state={{
                            ...this.state,
                            header: null,
                            col,
                        }}
                        classes={this.classes}
                        handlers={this.handlers}
                    />
                ))}
            </TableRow>
        )
    }
}

DefaultTableRow.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}
