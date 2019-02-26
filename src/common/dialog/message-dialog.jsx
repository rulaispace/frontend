import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

import reducer from './reducer'

function MessageDialog({store}) {
    return (
        <div>
            <Dialog
                open={store.getState().message.open}
                onClose={() => {store.dispatch(reducer.createAction(reducer.types.close))}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{store.getState().message.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{store.getState().message.details}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            store.dispatch(reducer.createAction(reducer.types.close))
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