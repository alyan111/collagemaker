import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  overflow: "hidden",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};


const ModelComponent = ({ isOpen = false, href, closed, children }) => {

  const [open, setOpen] = React.useState(isOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (!open) {
      document.body.style.overflow = 'auto';
      closed(href);
    }
  }, [open]);

  return (
    <div>
      {
        document.body.style.overflow == 'hidden'
      }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {
              href === "addCategories" && <Typography variant="h6" component="h2">
                Add Category
              </Typography>
            }
            {children}
          </Box>
        </Fade>
      </Modal >
    </div >
  );
}

export default ModelComponent