import React from 'react'
import IconStore from "../utils/icon-store";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import IconNameSet from "../config/icon-name-config";

export default function DefaultRightButtonGroup({state, classes}) {
    return state.type==='department' ? (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={IconNameSet.groupAdd} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={IconNameSet.personAdd} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={IconNameSet.edit} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={IconNameSet.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    ) : (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={IconNameSet.edit} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={IconNameSet.delete} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    )
}

DefaultRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}