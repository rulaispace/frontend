import React from 'react'
import IconStore from "../utils/icon-store";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Button from "@material-ui/core/es/Button/Button";

export default function DefaultRightButtonGroup({state, classes, handlers}) {
    const {
        feature: {
            showRightButtonGroup,
        },
        rightButtonGroup: {
            className: rightButtonGroupClassName,
        }
    } = state


    if(showRightButtonGroup) {
        return (
            <div className={classes[rightButtonGroupClassName]}>
                {
                    Object.keys(handlers).map(id => {
                        if ('textButton' === handlers[id].type) {
                            return (
                                <Button
                                    key={id}
                                    color='inherit'
                                    onClick={e => {
                                        e.preventDefault()
                                        handlers[id].onClick(state)
                                    }}
                                >
                                    {handlers[id].text}
                                </Button>
                            )
                        }

                        return (
                            <IconButton
                                key={id}
                                color={'inherit'}
                                onClick={e => {
                                    e.preventDefault()
                                    handlers[id].onClick(state)
                                }}
                            >
                                <IconStore iconKey={id}/>
                            </IconButton>
                        )
                    })
                }
            </div>
        )
    }

    return null
}

DefaultRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}