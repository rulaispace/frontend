import React from 'react'
import IconStore from "../utils/icon-store";
import PropTypes from "prop-types";
import IconNameSet from "../config/icon-name-config";

export default function DefaultTextIcon({state, classes}) {
    return state.type==='department' ? (
        <IconStore iconKey={IconNameSet.group} className={classes.nestedListDefaultIcon}/>
    ) : (
        <IconStore iconKey={IconNameSet.person} className={classes.nestedListDefaultIcon}/>
    )
}

DefaultTextIcon.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}