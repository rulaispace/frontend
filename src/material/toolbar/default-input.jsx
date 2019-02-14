import React from 'react'
import IconStore from "../icon-store";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";

export default function DefaultInput({state, classes}) {
    const {
        feature: {
            showInput,
            showInputIcon,
        },
        input: {
            iconKey: inputIconKey,
            className: inputClassName,
            iconClassName: inputIconClassName,
            inputRootClassName,
            inputInputClassName,

            inputRef: inputReactRef,
            placeholder: inputPlaceholder,
            defaultValue: inputDefaultValue,
            disabled: inputDisabled,
        },
    } = state

    if (showInput) {
        return (
            <div className={classes[inputClassName]}>
                {showInputIcon ? (
                    <div className={classes[inputIconClassName]}>
                        <IconStore iconKey={inputIconKey} />
                    </div>
                ) : null}
                <InputBase
                    placeholder={inputPlaceholder}
                    defaultValue={inputDefaultValue}
                    inputRef={inputReactRef}
                    disabled={inputDisabled}
                    classes={{
                        root: classes[inputRootClassName],
                        input: classes[inputInputClassName],
                    }}
                />
            </div>
        )
    }

    return null
}

DefaultInput.propTypes = {
    state: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}