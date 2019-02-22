import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import Link from '@material-ui/core/Link'
import * as array from "../utils/array";

function LinkableEle({classes, state}) {
    const {items, actions} = state
    return (
        <div>
            {
                items.map((text, i) => (
                    <Link
                        className={classes.tableCellDefaultLinkItem}
                        key={i}
                        onClick={
                            array.itemWithFirstAsFallback(actions, i)
                        }
                    >
                        {text}
                    </Link>
                ))
            }
        </div>
    )
}

LinkableEle.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}


export default function DefaultTableCell({state, classes, handlers}) {
    const {
        col: {
            id,
            numeric,
            disablePadding,
            linkable,
        },
        row
    } = state

    return (
        <TableCell
            className={classes[handlers.cellStyles(row, state.col)]}
            align={numeric ? 'center' : 'left'}
            padding={disablePadding ? 'none' : 'default'}
        >
            {
                linkable ? (
                    <LinkableEle
                        state={{
                            items: array.asArray(row[id]),
                            actions: array.asArray(handlers[id].onClick)
                        }}
                        classes={classes}
                    />
                ) : row[id]
            }
        </TableCell>
    )
}

DefaultTableCell.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}
