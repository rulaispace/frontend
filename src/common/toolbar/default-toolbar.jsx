import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import IconStore from "../utils/icon-store";
import {deepOverride} from "../utils/object";
import JSON from "circular-json";
import DefaultRightButtonGroup from "./default-right-button-group";
import DefaultInput from "./default-input";
import IconNameSet from "../config/icon-name-config";

const DefaultToolbarState = {
    feature: {
        rootClassName: 'toolbarDefaultRoot',
        variant: 'dense',
        disableGutters: false,
        growClassName: 'toolbarDefaultGrow',
        showLeftButton: false,
        showTitle: false,
        showInput: true,
        showInputIcon: true,
        showInputButton: false,
        showRightButtonGroup: false,
    },
    factory: {
        InputFactory: DefaultInput,
        RightButtonGroupFactory: DefaultRightButtonGroup,
    },
    leftButton: {
        key: IconNameSet.menu,
        rootClassName: 'toolbarDefaultLeftButton',
        onClick: (state)=> {
            alert(JSON.stringify(state))
        },
    },
    title: {
        label: 'Material-UI',
        variant: 'h6',
        rootClassName: 'toolbarDefaultTitle',
    },
    input: {
        iconKey: IconNameSet.search,
        inputRef: React.createRef(),
        className: 'toolbarDefaultInput',
        iconClassName: 'toolbarDefaultInputIcon',
        inputRootClassName: 'toolbarDefaultInputRoot',
        inputInputClassName: 'toolbarDefaultInputInput',
        disabled: false,
    },
    rightButtonGroup: {
        rootClassName: 'toolbarDefaultRightButtonGroup',
        group: [],
    }
}

export default class DefaultToolbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = deepOverride(DefaultToolbarState, props.state)
        this.classes = props.classes
    }

    render() {
        const {
            feature: {
                variant: toolbarVariant,
                className: toolbarRoot,
                disableGutters=false,
                growClassName,
                showLeftButton,
                showTitle,
            },
            factory: {
                InputFactory,
                RightButtonGroupFactory,
            },
            leftButton : {
                key: leftButtonIconKey,
                className: leftButtonClassName,
                onClick: leftButtonClicked,
            },
            title: {
                label,
                variant: titleVariant,
                className: titleClassName,
            },
        } = this.state


        return (
            <Toolbar className={this.classes[toolbarRoot]} variant={toolbarVariant} disableGutters={disableGutters}>
                {/** 左侧按钮 **/}
                {showLeftButton ? (
                    <IconButton
                        className={this.classes[leftButtonClassName]} color='inherit'
                        aria-label='left button'
                        onClick={(e) => {
                            e.preventDefault()
                            leftButtonClicked(this.state)
                        }}
                    >
                        <IconStore iconKey={leftButtonIconKey}/>
                    </IconButton>
                ) : null}

                {/** 标题 **/}
                {showTitle ? (
                    <Typography
                        className={this.classes[titleClassName]}
                        variant={titleVariant}
                        color="inherit"
                        noWrap
                    >
                        {label}
                    </Typography>
                ) : null}
                {/** 主输入框 **/}
                <InputFactory state={this.state} classes={this.classes} />

                <div className={this.classes[growClassName]} />

                {/** 右侧按钮区域 **/}
                <RightButtonGroupFactory state={this.state} classes={this.classes} />
            </Toolbar>
        )
    }
}

DefaultToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
}