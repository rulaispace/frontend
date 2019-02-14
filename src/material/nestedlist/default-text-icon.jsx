import React from 'react'
import Naming from '../name'
import IconStore from "../icon-store";
import PropTypes from "prop-types";

export default function DefaultTextIcon({state, classes}) {
    return state.type==='department' ? (
        <IconStore iconKey={Naming.ICON_GROUP} className={classes.nestedListDefaultIcon}/>
    ) : (
        <IconStore iconKey={Naming.ICON_PERSON} className={classes.nestedListDefaultIcon}/>
    )
}

DefaultTextIcon.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}