import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

export default function CustomSelectCategoryBox({ categories, changeCategory }) {
  return (
    <Stack sx={{ width: "180px", margin: "0px 20px", height: "20px" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        size='small'
        options={categories}
        getOptionLabel={(option) => option.name}
        onChange={changeCategory}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    </Stack>
  );
}
