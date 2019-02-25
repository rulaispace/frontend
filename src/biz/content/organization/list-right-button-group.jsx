import PropTypes from "prop-types";
import iconNames from "../../../common/config/icon-name-config";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import IconStore from "../../../common/utils/icon-store";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function ListRightButtonGroup({state, classes, handlers}) {
    return state.type==='department' ? (
        <ListItemSecondaryAction>
            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.groupAdd].onClick(state)
            }}>
                <IconStore iconKey={iconNames.groupAdd} fontSize={'small'}/>
            </IconButton>

            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.personAdd].onClick(state)
            }}>
                <IconStore iconKey={iconNames.personAdd} fontSize={'small'}/>
            </IconButton>

            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.edit].onClick(state)
            }}>
                <IconStore iconKey={iconNames.edit} fontSize={'small'}/>
            </IconButton>

            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.delete].onClick(state)
            }}>
                <IconStore iconKey={iconNames.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    ) : (
        <ListItemSecondaryAction>
            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.edit].onClick(state)
            }}>
                <IconStore iconKey={iconNames.edit} fontSize={'small'}/>
            </IconButton>
            <IconButton onClick={(e) => {
                e.preventDefault()
                handlers[iconNames.delete].onClick(state)
            }}>
                <IconStore iconKey={iconNames.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    )
}

ListRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}