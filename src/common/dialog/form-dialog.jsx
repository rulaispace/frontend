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

const defaultInputHandler = {
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

        this.classes = props.classes

        for (const property in props.state.form) {
            props.state.form[property] = modifyWithDef(props.state.form[property], defaultInputState)
        }
        this.state = props.state
        console.log(this.state)

        for (const property in props.handlers.form) {
            props.handlers.form[property] = modifyWithDef(props.handlers.form[property], defaultInputHandler)
        }
        this.handlers = props.handlers
    }

    render() {
        return (
            <Dialog fullScreen open={this.state.open} TransitionComponent={Transition}>
                <AppBar className={this.classes.contentDefaultAppbar} position='static' color='secondary' elevation={0}>
                    <DefaultToolbar classes={this.classes} state={this.state.toolbar} handlers={this.handlers.toolbar}/>
                </AppBar>
                <form className={this.classes.formDefaultContainer} noValidate autoComplete="off">
                    {
                        Object.keys(this.handlers.form).map(id => {
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
                    htmlFor={"form-input-" + this.handlers.id}
                >
                    {this.handlers.label}
                </InputLabel>
                <OutlinedInput
                    id={"form-input-" + this.handlers.id}
                    labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                    value={this.state.value}
                    aria-describedby={"form-helper-text-" + this.handlers.id}
                    onChange={e=>{
                        e.preventDefault()
                        this.handlers.handleChange(this.handlers.id, e.target.value)
                    }}
                />
                {this.state.msg?(<FormHelperText id={"form-helper-text-" + this.handlers.id}>{this.state.msg}</FormHelperText>):null}
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