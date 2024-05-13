import { Menu, Stack, colors } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  margin: '0px',
  backgroundColor: "transparent",
  border: '1.5px solid #777', borderRadius: '20px'


}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "50%", height: "100%",
  boxShadow: '0px',
  backgroundColor: "transparent",
  color: '#202020',
  padding: '5px 15px',
  paddingTop: '4px',
  margin: '0px',
  borderRadius: '20px',
  border: '1.5px solid #666',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const ViewSwitchButtonGroup = ({ handleChange }) => {
  return (
    <Stack sx={{
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent: "center",
      height: "33px"
    }}>
      <StyledButton onClick={() => { handleChange('list') }} sx={{ borderRadius: "25px 0px 0px 25px " }}><MenuIcon fontSize='small' /></StyledButton>
      <StyledButton onClick={() => { handleChange('grid') }} sx={{ borderRadius: "0px 25px 25px 0px ", borderLeft: "0px" }}><ViewModuleIcon fontSize='small' /></StyledButton>
    </Stack>
  )
}

export default ViewSwitchButtonGroup