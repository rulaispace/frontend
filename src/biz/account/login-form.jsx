import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import post from '../../common/fetch/fetch'

import reducer from './reducer'
import messageReducer from '../../common/dialog/reducer'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.store = props.store

        this._username = React.createRef()
        this._password = React.createRef()

        this.submit = this.submit.bind(this)
        this.loginSuccess = this.loginSuccess.bind(this)
        this.loginFailed = this.loginFailed.bind(this)
    }

    loginSuccess(payload) {
        this.store.dispatch(reducer.createAction(reducer.types.login, payload))
    }

    loginFailed(err) {
        console.log(err)
        this.store.dispatch(messageReducer.createAction(messageReducer.types.show, err))
    }

    submit() {
        let username = this._username.current.value
        let password = this._password.current.value
        post('login', {username, password}, this.loginSuccess, this.loginFailed)
    }

    render() {
        const store = this.store
        const {account} = store.getState()

        return (
            <div>
                <Dialog
                    open={account.open}
                    onClose={
                        () => {
                            store.dispatch(reducer.createAction(reducer.types.close))
                        }
                    }
                    aria-labelledby='form-dialog-title'
                >
                    <DialogTitle id='form-dialog-title'>登录系统</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin='dense'
                            id='username'
                            label='用户名'
                            type='text'
                            inputRef={this._username}
                            defaultValue={account.username}
                            fullWidth
                            required
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id='password'
                            label='密码'
                            inputRef={this._password}
                            defaultValue={account.password}
                            type='password'
                            fullWidth
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button id='login-button' onClick={this.submit} color='primary'>
                            登录
                        </Button>
                        <Button
                            id='close-button'
                            onClick={
                                () => {
                                    store.dispatch(reducer.createAction(reducer.types.close))
                                }
                            }
                            color='primary'
                        >
                            取消
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

LoginForm.propTypes = {
    store: PropTypes.object.isRequired
}