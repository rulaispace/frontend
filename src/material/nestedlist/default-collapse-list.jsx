import React from 'react'
import PropTypes from 'prop-types'
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import DefaultListItem from "./default-list-item";

export default function DefaultCollapseList({state, classes}) {
    const {
        feature: {
            listClassName
        },
        data,
    } = state

    if (data) {
        return (
            <Collapse in={true}>
                <List
                    component={'nav'}
                    dense={true}
                    className={classes[listClassName]}
                >
                    {data.map((item) => {
                        return (
                            <DefaultListItem
                                key={item.key}
                                state={{
                                    ...state,
                                    data: item,
                                }}
                                classes={classes}
                            />
                        )
                    })}
                </List>
            </Collapse>
        )
    }

    return null
}

DefaultCollapseList.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}