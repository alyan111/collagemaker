import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import TextInput from './TextInput';

export default function FileInputWithPreview({ index, handleFileChange, handleCheckboxChange, handleRemoveFileInput, selectedFile, type }) {

  // console.log(selectedFile.src);

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
        top: "10px", left: "10px",

      }}>
        <Stack sx={{
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "#ddd",
          padding: "5px 10px", margin: "5px", borderRadius: "5px"
        }}>
          {selectedFile.src && <Box>
            <input
              type="checkbox"
              id={`isFrame-${index}`}
              checked={selectedFile.isFrame}
              onChange={(event) => handleCheckboxChange(index, event, "frame")}
            />
            <label htmlFor={`isFrame-${index}`} className="ml-2">Frame</label>
          </Box>}
          <Box>
            <input
              type="checkbox"
              id={`isText-${index}`}
              checked={selectedFile.isText}
              onChange={(event) => handleCheckboxChange(index, event, "text")}
            />
            <label htmlFor={`isText-${index}`} className="ml-2">Text</label>
          </Box>
        </Stack>
      </Box>
      {
        !selectedFile.isText && <Box sx={{
          position: "absolute",
          bottom: "0px", left: "0px",
          width: "100%",
          backgroundColor: "lightblue"
        }}>
          <input
            type="file"
            onChange={(event) => handleFileChange(index, event, false)}
          />
        </Box>
      }
      <Box sx={{
        width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        {

          // (selectedFile.isText || selectedFile.src == null) && (selectedFile.isText ? <TextField id="outlined-basic" label="Enter text here" variant="outlined"
          //   onChange={(event) => handleFileChange(index, event, true)} /> : <Typography variant="h5" component="h2" color={"#444"}>{"Select " + type + " | " + selectedFile.isText}</Typography>)

          (selectedFile.isText || selectedFile.src == null) && (selectedFile.isText ? <Typography variant="h5" component="h2" color={"#444"}>Display text field</Typography> : <Typography variant="h5" component="h2" color={"#444"}>Display image message</Typography>)
        }
      </Box>
      {!selectedFile.isText && (
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
    </Card>
  );
}
