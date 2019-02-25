import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import DefaultListItem from './default-list-item'
import DefaultCollapseList from './default-collapse-list'
import DefaultTextIcon from './default-text-icon'
import DefaultRightButtonGroup from './default-right-button-group'
import iconNames from "../config/icon-name-config";
import {modifyWithDef} from "../utils/store-state-modifier";

const defaultState = {
    feature: {
        listClassName: 'nestedListDefaultList',
        title: '上海通用汽车有限公司',
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

export default class DefaultNestedList extends React.Component {
    constructor(props) {
        super(props)

        this.state = modifyWithDef(props.state, defaultState)
        this.handlers = modifyWithDef(props.handlers, defaultHandlers)
        this.classes = props.classes
    }

    render() {
        const {
            feature: {
                rootClassName,
                title
            },
            data,
        } = this.state

        return (
            <List
                dense
                className={this.classes[rootClassName]}
                component={'nav'}
                subheader={(
                    title ? (<ListSubheader component={'div'}>{title}</ListSubheader>) : null
                )}
            >
                {data.reduce((components, item, index)=>{
                    return [
                        ...components,
                        (<DefaultListItem
                            key={item.id}
                            state={{
                                ...this.state,
                                data: item,
                            }}
                            classes={this.classes}
                            handlers={this.handlers}
                        />),
                        (
                            item.expanded ? (
                                <DefaultCollapseList
                                    key={index}
                                    classes={this.classes}
                                    state={{
                                        ...this.state,
                                        data: item.children,
                                    }}
                                    handlers={this.handlers}
                                />
                            ): null
                        ),
                    ]
                }, [])}
            </List>
        )
    }
}

DefaultNestedList.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}

