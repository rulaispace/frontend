import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconStore from "../icon-store";

export default function DefaultListItem({state, classes}) {
    const {
        feature: {
            collapsedIconKey,
            expandedIconKey,
            collapse,
            expand,
            TextIconFactory,
            textClassName,
            RightButtonGroupFactory,
        },
        data,
    } = state

    const {key, depth, collapsed, primaryText, secondaryText} = data

    return (
        <ListItem
            key={key}
            className={classes[`nestedListDefaultItemLevel${depth}`]}
        >
            {/** 根据当前状态，选择列表前面按钮的图标以及回调函数 **/}
            {
                collapsed ? (
                    <IconButton onClick={expand}>
                        <IconStore iconKey={collapsedIconKey} />
                    </IconButton>
                ) : (
                    <IconButton onClick={collapse}>
                        <IconStore iconKey={expandedIconKey} />
                    </IconButton>
                )
            }
            {/** 创建文本前的图标 **/}
            <TextIconFactory state={data} classes={classes}/>
            {/** 创建文本 **/}
            <ListItemText
                className={classes[textClassName]}
                primary= {primaryText}
                secondary={secondaryText}
            />
            {/** 创建右侧按钮区 **/}
            <RightButtonGroupFactory state={data} classes={classes}/>
        </ListItem>
    )
}
DefaultListItem.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}