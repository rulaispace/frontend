
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import handler from './login-dialog-handler'
import TextField from "@material-ui/core/TextField";

class LoginDialog extends React.Component {
    constructor(props) {
        super(props)

        this._username = React.createRef()
        this._password = React.createRef()

        this.state = {
            open: false,
            username: '',
            password: '',
            loginCallback: () => {this.setState({...this.state, open: false, username: null, password: null})}
        }
        this.classes = props.classes

        handler.setRef(this)
    }

    render() {
        return (
            <div>
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={(e) => {
                            e.preventDefault()
                            this.setState({...this.state, open: false, username: null, password: null})
                        }}
                        aria-labelledby='login-dialog-title'
                    >
                        <DialogTitle id='login-dialog-title'>登录系统</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='username'
                                label='用户名'
                                type='text'
                                inputRef={this._username}
                                defaultValue={this.state.username}
                                fullWidth
                                required
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='password'
                                label='密码'
                                inputRef={this._password}
                                defaultValue={this.state.password}
                                type='password'
                                fullWidth
                                required
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                id='login-button'
                                onClick={
                                    e => {
                                        e.preventDefault()
                                        this.state.loginCallback(this._username.current.value, this._password.current.value)
                                    }
                                }
                                color='primary'
                            > 登录 </Button>

                            <Button
                                id='close-button'
                                onClick={
                                    (e) => {
                                        e.preventDefault()
                                        this.setState({...this.state, open: false, username: null, password: null})
                                    }
                                }
                                color='primary'
                            > 取消 </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

LoginDialog.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default LoginDialog