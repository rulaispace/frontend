import React from 'react'
import IconStore from "../utils/icon-store";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

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
                {handlers.rightButtonGroup.group.map(({key, onClick}) => (
                    <IconButton
                        key={key}
                        color={'inherit'}
                        onClick={(e) => {
                            e.preventDefault()
                            onClick(state)
                        }}
                    >
                        <IconStore iconKey={key}/>
                    </IconButton>
                ))}
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