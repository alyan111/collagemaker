import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function LimitTags({ categories, handleCategoryChangeInModal }) {

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={categories}
      getOptionLabel={(option) => option}
      onChange={handleCategoryChangeInModal}
      renderInput={(params) => (
        <TextField {...params} label="Categories" placeholder="Select types" />
      )}
      sx={{
        width: "100%", margin: "20px 0px"
      }}
    />
  );
}