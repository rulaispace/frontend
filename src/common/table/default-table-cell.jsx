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


export default class DefaultTableCell extends React.Component {
    constructor(props) {
        super(props)

        this.state = props.state
        this.classes = props.classes
    }

    render() {
        const {
            feature: {
                cellStyles,
            },
            col: {
                id,
                numeric,
                disablePadding,
                linkable,
                onClick,
            },
            row
        } = this.state

        return (
            <TableCell
                key={row[id]}
                className={this.classes[cellStyles(row, this.state.col)]}
                align={numeric ? 'center' : 'left'}
                padding={disablePadding ? 'none' : 'default'}
            >
                {
                    linkable ? (
                        <LinkableEle
                            state={{
                                items: array.asArray(row[id]),
                                actions: array.asArray(onClick)
                            }}
                            classes={this.classes}
                        />
                    ) : row[id]
                }
            </TableCell>
        )
    }
}

DefaultTableCell.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
}
