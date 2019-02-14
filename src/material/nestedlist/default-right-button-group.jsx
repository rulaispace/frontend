import React from 'react'
import Naming from '../name'
import IconStore from "../icon-store";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

export default function DefaultRightButtonGroup({state, classes}) {
    return state.type==='department' ? (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={Naming.ICON_GROUP_ADD} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={Naming.ICON_PERSON_ADD} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={Naming.ICON_EDIT} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={Naming.ICON_DELETE} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    ) : (
        <ListItemSecondaryAction>
            <IconButton >
                <IconStore iconKey={Naming.ICON_EDIT} fontSize={'small'}/>
            </IconButton>
            <IconButton >
                <IconStore iconKey={Naming.ICON_DELETE} fontSize={'small'}/>
            </IconButton>
        </ListItemSecondaryAction>
    )
}

DefaultRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}