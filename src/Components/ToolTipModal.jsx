import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ToolTipModal = (props)  => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        onClick={handleOpen}
        style={
          { color: "black", textDecoration: "underline" }
        }
      >
        {props.text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
                If you don't know how to answer this question, you may be able to locate
                your records here:{" "}
                <a target="_blank" href="https://www.wsp.wa.gov/crime/criminal-history" rel="noreferrer">
                https://www.wsp.wa.gov/crime/criminal-history
                </a>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ToolTipModal;