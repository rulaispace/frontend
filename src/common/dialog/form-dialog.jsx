import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import DefaultToolbar from "../toolbar/default-toolbar";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {findDOMNode} from "react-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import {modifyWithDef} from "../utils/store-state-modifier";
import uuid from 'uuid'

const defaultInputHandler = {
    visible: true,
    className: 'formDefaultTextField',
    inputClassName: 'formDefaultInputLabel',
    disabled: false,
}

const defaultInputState = {
    error: false,
    msg: '',
}

class DefaultFormDialog extends React.Component {
    constructor(props) {
        super(props)

        this.proxy = this.proxy.bind(this)

        this.classes = props.classes

        defaultInputHandler.proxy = this.proxy
        for (const property in props.handlers.form) {
            props.handlers.form[property] = modifyWithDef(props.handlers.form[property], defaultInputHandler)
            props.state.form[property] = modifyWithDef(props.state.form[property], defaultInputState)
        }
        this.handlers = props.handlers
        this.state = props.state

    }

    proxy(target) {
        if (typeof target == 'function') return target(this.state)
        return target
    }

    render() {
        return (
            <Dialog fullScreen open={this.state.open} TransitionComponent={Transition}>
                <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0}>
                    <DefaultToolbar classes={this.classes} state={this.state.toolbar} handlers={this.handlers.toolbar}/>
                </AppBar>
                <form className={this.classes.formDefaultContainer} noValidate autoComplete="off">
                    {
                        Object.keys(this.handlers.form).filter(id => (this.handlers.form[id].proxy(this.handlers.form[id].visible))).map(id => {
                            return (
                                <DefaultFormInput
                                    key={id}
                                    classes={this.classes}
                                    state={this.state.form[id]}
                                    handlers={{
                                        ...this.handlers.form[id],
                                        id
                                    }}
                                />
                            )
                        })
                    }
                </form>
            </Dialog>
        );
    }
}

DefaultFormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
}

DefaultFormDialog.unboxing = function(state) {
    const result = {}
    for (const property in state) {
        result[property] = state[property].value
    }
    return result
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class DefaultFormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.state
        this.classes = props.classes
        this.handlers = props.handlers
    }

    render() {
        const id = uuid.v1()
        return (
            <FormControl
                className={this.classes[this.handlers.className]}
                variant="outlined"
                margin='normal'
                disabled={this.handlers.disabled}
                error={this.state.error}
            >
                <InputLabel
                    className={this.classes[this.handlers.inputClassName]}
                    ref={ref => {
                        this.labelRef = findDOMNode(ref)
                    }}
                    htmlFor={"form-input-" + id}
                >
                    {this.handlers.proxy(this.handlers.label)}
                </InputLabel>
                <OutlinedInput
                    id={"form-input-" + id}
                    labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                    value={this.state.value}
                    aria-describedby={"form-helper-text-" + id}
                    onChange={e=>{
                        e.preventDefault()
                        this.handlers.handleChange(this.handlers.id, e.target.value)
                    }}
                />
                {this.state.msg?(<FormHelperText id={"form-helper-text-" + id}>{this.state.msg}</FormHelperText>):null}
            </FormControl>
        )
    }
}

DefaultFormInput.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    handlers: PropTypes.object.isRequired,
}

export default DefaultFormDialog