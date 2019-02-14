import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

import Reducer from './reducer'

function MessageDialog({store}) {
    const {
        message: {
            open = false,
            title = '系统提示：',
            details = '无话可说！'
        }
    } = store.getState()

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => {
                    store.dispatch(Reducer.close())
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {details}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            store.dispatch(Reducer.close())
                        }}
                        color="primary" autoFocus
                    >
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

MessageDialog.propTypes = {
    store: PropTypes.object.isRequired
}

export default MessageDialog;