
import React from "react";
import commonNames from "../config/common-name-config";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import StoreFactory from '../redux/store-factory'
import PropTypes from "prop-types";

class CommonDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            type: commonNames.alert,
            title: '系统提示',
            message: '提示语',
            agreeCallback: () => {
                this.setState({
                    ...this.state,
                    open: false
                })
            },
            disagreeCallback: () => {
                this.setState({
                    ...this.state,
                    open: false
                })
            }
        }
        this.classes = props.classes
        StoreFactory.message.self = this
    }

    render() {
        return (
            <div>
                <Dialog
                    classes={{
                        paper: this.classes.commonDialogDefaultRoot,
                    }}
                    open={this.state.open}
                    onClose={() => {this.setState({...this.state, open: false})}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">{this.state.message}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.state.agreeCallback}
                            color="primary" autoFocus
                        >
                            确定
                        </Button>
                        {
                            this.state.type === commonNames.alert ? (
                                <Button
                                    onClick={this.state.disagreeCallback}
                                    color="primary" autoFocus
                                >
                                    取消
                                </Button>
                            ) : null
                        }
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

CommonDialog.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default CommonDialog