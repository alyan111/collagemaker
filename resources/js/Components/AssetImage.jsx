import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const AssetImage = ({ src, title, index }) => {
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
    </Card>
  )
}

export default AssetImage