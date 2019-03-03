import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import Any from '../../common/base/any'
import Link from '@material-ui/core/Link'
import uuid from "uuid";
import commonNames from "../../common/config/common-name-config";

function LinkableEle({classes, row, ordinal, handler}) {
    return (
        <div>
            {
                Any.asArray(ordinal).map(function(ordinal) {
                    return (
                        <Link
                            className={classes.tableCellDefaultLinkItem}
                            key={uuid.v1()}
                            onClick={(e) => {
                                e.preventDefault()
                                DefaultTableCell.proxy(ordinal, handler, commonNames.onClick)(row)
                            }}
                        >
                            {DefaultTableCell.proxy(ordinal, handler, commonNames.label)}
                        </Link>
                    )
                })
            }
        </div>
    )
}

LinkableEle.propTypes = {
    row: PropTypes.object.isRequired,
    ordinal: PropTypes.object.isRequired,
    handler: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}


export default function DefaultTableCell({state, classes, handlers}) {
    return (
        <TableCell
            className={classes[handlers.cellStyles(state.row, state.col)]}
            align={state.col.numeric ? 'center' : 'left'}
            padding={state.col.disablePadding ? 'none' : 'default'}
        >
            {
                state.col.linkable ? (
                    <LinkableEle
                        row={state.row}
                        ordinal={state.row[state.col.id]}
                        handler={handlers[state.col.id]}
                        classes={classes}
                    />
                ) : DefaultTableCell.proxy(state.row[state.col.id], handlers[state.col.id], commonNames.label)
            }
        </TableCell>
    )
}

DefaultTableCell.proxy = function(ordinal, handler, type) {
    if (handler == null) return ordinal
    if (handler[type] == null) return ordinal
    return handler[type](ordinal)
}

DefaultTableCell.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}
