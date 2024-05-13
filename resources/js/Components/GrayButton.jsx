import React from 'react';
import Button from '@mui/material-next/Button';
import { styled, alpha } from '@mui/material/styles';

const GrayButton = ({ onClick, sx = {}, variant = "filledTonal", isGray = true, submit = false, className = "", children, ...props }) => {
  const GrayButton = styled(Button)(({ theme }) => ({
    color: '#202020',
    backgroundColor: "rgba(0,0,0,0.1)",
  }));
  if (isGray) {
    return (
      <GrayButton
        type={submit ? "submit" : "button"}
        color="primary"
        size="small"
        variant={variant}
        onClick={onClick}
        className={className}
        {...props} sx={sx}>
        {children}
      </GrayButton>
    )
  } else {
    return (
      <Button
        type={submit ? "submit" : "button"}
        color="primary"
        size="small"
        variant={variant}
        onClick={onClick}
        className={className}
        {...props} sx={sx}>
        {children}
      </Button>
    );
  }
}

export default GrayButton