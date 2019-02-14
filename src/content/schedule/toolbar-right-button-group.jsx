import React from 'react'
import PropTypes from "prop-types";
import IconStore from "../../material/icon-store";
import Button from "@material-ui/core/es/Button/Button";
import Naming from '../../material/name'

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
                    <IconStore iconKey={Naming.ICON_SKIP_PRE}/>
                </Button>
                <Button size='small' color='primary' className={classes.contentDefaultMinIconButton}>
                    今天
                </Button>
                <Button className={classes.contentDefaultMinIconButton}>
                    <IconStore iconKey={Naming.ICON_SKIP_NEXT}/>
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