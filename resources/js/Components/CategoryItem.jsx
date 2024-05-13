import React from 'react';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomCategoryChip from './CustomCategoryChip';

let token = "21|7WiAwk3nkyfyUxHm4NHbvW3J9qsTdwvN99l0sMO37fc076cd";

const CategoryItem = ({ data, actionButtonClick }) => {

  const [types, setTypes] = React.useState(data['type'].split(', '));

  const [isEnabled, setIsEnabled] = React.useState(data['show'] ? true : false);

  const colorPalettes = {
    'Background': { fg: "#03AED2", bg: "#68D2E8", tc: "white" },
    'Pattern': { fg: "#F8C794", bg: "#FFF2D7", tc: "black" },
    'Sticker': { fg: "#6AD4DD", bg: "#97E7E1", tc: "black" },
    'Solid': { fg: "#9BBEC8", bg: "#DDF2FD", tc: "black" },
    'Gradient': { fg: "#5DEBD7", bg: "#8DECB4", tc: "black" },

  }

  const handleChange = async () => {
    setIsEnabled(!isEnabled);
    await axios.get(route("toggle.category") + "?id=" + data['id'], {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardActionArea>
        <CardMedia sx={{
          minHeight: '200px',
          objectFit: "cover",
          opacity: isEnabled == true ? 0.8 : 0.6,
        }}
          component="img"
          image={`https://ui-avatars.com/api/?background=random&name=${data['name'][0] + data['name'][1]}&font-size=0.5&size=256`}
          alt={data['name']}
        />
      </CardActionArea>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <Typography gutterBottom variant="h6" component="div">
            {data['name']}
          </Typography>
          <Switch
            edge="end"
            size='small'
            onChange={handleChange}
            checked={isEnabled}
            inputProps={{
              'aria-labelledby': data['name'] + data['id']
            }}
          />
        </Stack>

        <Stack direction={'row'} flexWrap={'wrap'}>
          {
            types.map((_, index) => <CustomCategoryChip data={_} color={colorPalettes[_]['tc']} foregroundColor={colorPalettes[_]['fg']} backgroundColor={colorPalettes[_]['bg']} key={index} />)
          }
        </Stack>

        <Stack sx={{
          position: "absolute",
          bottom: "4px", right: "7px",
          display: "flex", flexDirection: "row"
        }}>
          {/* <IconButton aria-label="edit-icon" size='small' color="disabled" onClick={() => actionButtonClick(data['id'], data['name'], "edit")}>
            <ModeEditIcon sx={{ width: "20px", height: "20px", color: "#333" }} />
          </IconButton> */}
          <IconButton aria-label="delete" size='small' color="disabled" onClick={() => actionButtonClick(data['id'], data['name'], "delete")}>
            <DeleteIcon sx={{ width: "20px", height: "20px", color: "#d60032" }} />
          </IconButton>
        </Stack>

      </CardContent>
    </Card>
  )
}

export default CategoryItem