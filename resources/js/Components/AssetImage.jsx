import { Box, Card, Typography } from '@mui/material'
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const AssetImage = ({ src, title, uni, index, handleRemoveFileInput }) => {
  return (
    <Card sx={{
      width: "300px",
      height: "300px",
      overflow: "hidden",
      margin: "20px",
      position: "relative"
    }}>
      <img src={src} key={index} style={{ objectFit: "fill" }} />
      <Box sx={{ position: "absolute", bottom: "0px", left: "0px", backgroundColor: "white", width: "100%", padding: "10px 15px" }}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "10px", right: "10px",
        // backgroundColor: "blue"
      }}>
        <IconButton onClick={() => handleRemoveFileInput(uni)} aria-label="delete">
          <DeleteIcon color='warning' />
        </IconButton>
      </Box>
    </Card>
  )
}

export default AssetImage