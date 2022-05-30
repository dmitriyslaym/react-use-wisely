import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WithConfirm = ({
                      uid = 'confirmation',
                      title = '',
                      description = 'Are you sure?',
                      onAgree = () => {},
                      onDisagree = () => {},
                      children,
                      textForAgree = 'Yes',
                      textForDisagree = 'No',
                    }) => {
  const [open, setOpen] = useState(false);

  const openConfirmation = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    onDisagree(e);
  };

  const handleAgree = (e) => {
    setOpen(false);
    onAgree(e);
  };

  return (
    <>
      {children({ openConfirmation })}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={`${uid}-title`}
        aria-describedby={`${uid}-description`}
      >
        <DialogTitle data-testid={`${uid}-title`} id={`${uid}-title`}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText data-testid={`${uid}-description`} id={`${uid}-description`}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus data-testid={`${uid}-button-no`}>
            {textForDisagree}
          </Button>
          <Button onClick={handleAgree} data-testid={`${uid}-button-yes`}>
            {textForAgree}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Example10 = () => {
  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }} variant="h4">Example 9</Typography>
      <WithConfirm
        title={'The title of the action'}
        description={'Are you sure you want to do it?'}
        onAgree={() => {
          console.log('Ok, lets do it');
        }}
        onDisagree={() => {
          console.log('You have cancelled the action');
        }}
      >
        {({ openConfirmation }) => (
          <Button
            sx={{ margin: '10px 0' }}
            type="button"
            variant="contained"
            color="primary"
            onClick={() => openConfirmation()}
          >
            Do action with confirmation
          </Button>
        )}
      </WithConfirm>
    </Box>
  )
};

