import React from 'react'
import PropTypes from "prop-types";
import IconStore from "../../../common/utils/icon-store";
import IconNameSet from '../../../common/config/icon-name-config'
import Button from "@material-ui/core/Button";

export default function ToolbarRightButtonGroup({state, classes}) {
    const {
        feature: {
            showRightButtonGroup,
        },
        rightButtonGroup: {
            className: rightButtonGroupClassName
        }
    } = state

    if(showRightButtonGroup) {
        return (
            <div className={classes[rightButtonGroupClassName]}>
                <Button className={classes.contentDefaultMinIconButton}>
                    <IconStore iconKey={IconNameSet.skipPre}/>
                </Button>
                <Button size='small' color='primary' className={classes.contentDefaultMinIconButton}>
                    今天
                </Button>
                <Button className={classes.contentDefaultMinIconButton}>
                    <IconStore iconKey={IconNameSet.skipNext}/>
                </Button>
                <Button size='small' color='primary'>
                    按周展示
                </Button>
                <Button size='small' color='primary' >
                    按月展示
                </Button>
            </div>
        )
    }
    return null
}

ToolbarRightButtonGroup.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}