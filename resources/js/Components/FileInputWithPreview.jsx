import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FileInputWithPreview({ index, handleFileChange, handleCheckboxChange, handleRemoveFileInput, selectedFile, type, handleTextChange }) {
  let showText = true;
  try {
    showText = selectedFile.src && false;
  } catch (error) {

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
      <Box sx={{
        position: "absolute",
        bottom: "0px", left: "0px",
        width: "100%",
        backgroundColor: "lightblue",
        opacity: 50
      }}>
        <input
          type="file"
          onChange={(event) => handleFileChange(index, event)}
        />
      </Box>
      {
        showText && <Box sx={{
          width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
          <Typography variant="h5" component="h2" color={"#444"}>
            {"Select " + type}
          </Typography>
        </Box>
      }
      {selectedFile && (
        <div className="mt-2">
          {
            selectedFile.src && <Box sx={{
              width: "100%", height: "100%"
            }}>
              <img
                src={selectedFile.src}
                alt={`Selected file ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          }

          <Stack sx={{
            position: "absolute",
            top: "10px", left: "10px", margin: "7px", borderRadius: "12px",
            padding: "10px 20px ", backgroundColor: "rgba(0,0,0,0.5)", color: "white"
          }} spacing={1}>
            <Box>
              <input
                type="checkbox"
                id={`isFrame-${index}`}
                checked={selectedFile.isFrame}
                onChange={(event) => handleCheckboxChange(index, event, "frame")}
              />
              <label htmlFor={`isFrame-${index}`} className="ml-2">Frame</label>
            </Box>
            {/* <Box>
              <input
                type="checkbox"
                id={`isText-${index}`}
                checked={selectedFile.isText}
                onChange={(event) => handleCheckboxChange(index, event, "text")}
              />
              <label htmlFor={`isText-${index}`} className="ml-2">Text</label>
            </Box> */}
            <Box>
              <input
                type="checkbox"
                id={`isTop-${index}`}
                checked={selectedFile.isTop}
                onChange={(event) => handleCheckboxChange(index, event, "isTop")}
              />
              <label htmlFor={`isTop-${index}`} className="ml-2">Top</label>
            </Box>
          </Stack>
        </div>
      )}
      <Box sx={{
        position: "absolute",
        top: "10px", right: "10px",
        // backgroundColor: "blue"
      }}>
        <IconButton onClick={() => handleRemoveFileInput(index)} aria-label="delete">
          <DeleteIcon color='warning' />
        </IconButton>
      </Box>

      {selectedFile && (selectedFile.isText && <Box sx={{
        position: "absolute", padding: "10px",
        bottom: "30px", left: "0px", width: "100%", backgroundColor: "white",
        // backgroundColor: "blue"
      }}>
        <TextField sx={{ width: "100%", }}
          id="outlined-basic"
          onChange={(event) => { handleTextChange(index, event) }}
          label="Enter text here" variant="outlined" />
      </Box>)}

    </Card>
  );
}
