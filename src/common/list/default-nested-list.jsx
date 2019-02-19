import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import {deepOverride} from '../utils/object'
import ListSubheader from '@material-ui/core/ListSubheader'
import DefaultListItem from './default-list-item'
import DefaultCollapseList from './default-collapse-list'
import DefaultTextIcon from './default-text-icon'
import DefaultRightButtonGroup from './default-right-button-group'
import IconNameSet from "../config/icon-name-config";

const DefaultNestedListState = {
    feature: {
        listClassName: 'nestedListDefaultList',
        title: '上海通用汽车有限公司',
        collapsedIconKey: IconNameSet.arrowRight,
        expandedIconKey: IconNameSet.arrowDown,
        expand: () => {
            alert('Should expand the item.')
        },
        collapse: () => {
            alert('Should collapse the item.')
        },
        TextIconFactory: DefaultTextIcon,
        RightButtonGroupFactory: DefaultRightButtonGroup,
        textClassName: 'nestedListDefaultText',
    },
    data: [
        {
            key: 'JSB',
            collapsed: true,
            type: 'department',
            primaryText: '技术部',
            secondaryText: '负责开发工作',
            children: [],
        },
        {
            key: 'RLZYB',
            collapsed: false,
            type: 'department',
            primaryText: '人力资源部',
            secondaryText: '',
            children: [
                {
                    key: 'RLZYB-XCS',
                    collapsed: true,
                    type: 'department',
                    primaryText: '薪酬室',
                    secondaryText: '',
                },
            ],
        },
        {
            key: 'BGS',
            type: 'department',
            collapsed: false,
            primaryText: '办公室',
            secondaryText: '负责开发工作',
            children: [],
        },
    ]
}

function markDepth(tree, depth) {
    return tree.map(item => {
        return {
            ...item,
            depth: depth,
            children: item.children ? markDepth(item.children, depth+1) : null
        }
    })
}

export default class DefaultNestedList extends React.Component {
    constructor(props) {
        super(props)

        this.state = deepOverride(DefaultNestedListState, props.state)
        console.log(JSON.stringify(this.state))
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
                {markDepth(data, 0).reduce((components, item, index)=>{
                    return [
                        ...components,
                        (<DefaultListItem
                            key={item.key}
                            state={{
                                ...this.state,
                                data: item,
                            }}
                            classes={this.classes}
                        />),
                        (
                            item.collapsed ? null : (
                                <DefaultCollapseList
                                    key={index}
                                    classes={this.classes}
                                    state={{
                                        ...this.state,
                                        data: item.children,
                                    }}
                                />
                            )
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
}

