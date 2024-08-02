import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';

export default function FileInputWithPreview({ index, image, uni }) {

  const [shapeType, setShapeType] = React.useState(image.shapeType);

  const handleCheckboxChange = (event) => {
    let inp = event.target.value;
    setShapeType(inp);
    const formData = new FormData();
    formData.append("shapeType", shapeType);
    const apiToken = localStorage.getItem('apiToken');
    axios.post(route('update.template.image', { uni }), formData, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      }
    }).then(response => {
      openSnackbar(response.data.message, "success");
    }).catch(error => {
    });
  }

  const [open, setOpen] = React.useState({
    status: false,
    message: "",
    severity: "",
  });

  const openSnackbar = (message, severity) => {
    setOpen({
      status: true,
      message, severity
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway')
      return;
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      const type = index > 1 ? "image" : index == 0 ? "thumbnail" : "shade";
      const formData = new FormData();
      formData.append("image", image);
      formData.append(uni, uni);
      formData.append("type", type);
      formData.append("purpose", "updateImage");
      const apiToken = localStorage.getItem('apiToken');
      axios.post(route('update.template.image', { uni }), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${apiToken}`,
        }
      }).then(response => {
        openSnackbar(response.data.message, "success");
      }).catch(error => {
      });
    }
  }

  return (
    <Card key={index} className="mb-4"
      sx={{
        width: "300px", height: "300px",
        margin: "20px",
        position: "relative",
        overflow: "hidden"

        // border: "2px solid black",
      }}>

      {
        open.status && <Snackbar
          open={open.status}
          autoHideDuration={4000}
          onClose={handleClose}
          TransitionComponent={Grow}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={handleClose}
            severity={open.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {open.message}
          </Alert>
        </Snackbar>
      }

      <Box sx={{
        position: "absolute",
        bottom: "0px", left: "0px",
        width: "100%",
        backgroundColor: "lightblue",
        opacity: 50
      }}>
        <input
          type="file"
          onChange={(event) => handleFileChange(event)}
        />
      </Box>

      <div className="mt-2">
        {
          typeof image === 'string' && <Box sx={{
            width: "100%", height: "100%"
          }}>
            <img
              src={image}
              alt={`Selected file ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        }
        {
          typeof image !== 'string' && <Box sx={{
            width: "100%", height: "100%"
          }}>
            <img
              src={image.image}
              alt={`Selected file ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        }

        {(typeof image !== 'string' && image['shapeType'] != 0) && <Stack sx={{
          position: "absolute",
          top: "10px", left: "10px", margin: "7px", borderRadius: "12px", width: "200px",
          padding: "10px 20px ", backgroundColor: "#fff", color: "black"
        }} spacing={1}>
          {image.isFrame && <Select
            value={shapeType}
            label="Shape Type"
            id={`shapeType-${index}`}
            labelId={`shapeType-${index}`}
            onChange={(event) => handleCheckboxChange(event)}
          >
            <MenuItem value={"circle"}>Circle</MenuItem>
            <MenuItem value={"square"}>Square</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>}
        </Stack>}
      </div>

      <Box sx={{
        position: "absolute",
        top: "10px", right: "10px",
        // backgroundColor: "blue"
      }}>
        <IconButton onClick={() => handleRemoveFileInput(index)} aria-label="delete">
          <DeleteIcon color='warning' />
        </IconButton>
      </Box>

    </Card>
  );
}
