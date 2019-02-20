import React from 'react'
import IconStore from "../utils/icon-store";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import iconNames from "../config/icon-name-config";

export default function DefaultRightButtonGroup({state, classes}) {
    return state.type==='department' ? (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={iconNames.groupAdd} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={iconNames.personAdd} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={iconNames.edit} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={iconNames.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    ) : (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={iconNames.edit} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={iconNames.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    )
}

DefaultRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}