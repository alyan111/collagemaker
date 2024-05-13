import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const CustomCategoryChip = ({ data, foregroundColor, backgroundColor, color }) => {
  return (
    <Chip size="small" sx={{ backgroundColor, color, margin: "2px 2px" }} avatar={<Avatar sx={{ backgroundColor: foregroundColor, color }}>{data[0]}</Avatar>} label={data} />
  );
}

export default CustomCategoryChip
