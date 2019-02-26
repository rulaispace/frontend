import React from 'react'
import PropTypes from 'prop-types'
import DefaultTextIcon from './default-text-icon'
import DefaultRightButtonGroup from './default-right-button-group'
import iconNames from "../config/icon-name-config";
import {modifyWithDef} from "../utils/store-state-modifier";
import DefaultListBranch from "./default-list-branch";

const defaultState = {
    feature: {
        listClassName: 'nestedListDefaultList',
        collapsedIconKey: iconNames.arrowRight,
        expandedIconKey: iconNames.arrowDown,
        textClassName: 'nestedListDefaultText',
    }
}

const defaultHandlers = {
    expand: (data) => {
        alert('Should expand the item: ' + JSON.stringify(data))
    },
    collapse: (data) => {
        alert('Should collapse the item: ' + JSON.stringify(data))
    },
    TextIconFactory: DefaultTextIcon,
    RightButtonGroupFactory: DefaultRightButtonGroup,
    rightButtonGroup: {

    }
}

export default function DefaultList({classes, state, handlers}) {
    return <DefaultListBranch classes={classes} handlers={modifyWithDef(handlers, defaultHandlers)} state={modifyWithDef(state, defaultState)}/>
}

DefaultList.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}

