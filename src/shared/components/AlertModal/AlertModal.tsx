import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import "./AlertModal.scss";

interface Props {
  open: boolean;
  handleClose(): void,
  handleConfirm(): void,
  title?: string;
  text?: string;
}

class AlertModal extends Component<Props> {
  
  render() {
    const {open, handleClose, handleConfirm, title, text} = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="alert-modal"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          {text ?
            <DialogContent>
              <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
            </DialogContent> :
            null
          }
          <DialogActions>
            <Button onClick={handleClose} color="primary">No</Button>
            <Button color="primary" onClick={handleConfirm} autoFocus>Yes</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertModal;