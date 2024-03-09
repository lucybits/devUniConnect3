import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '30px',
    borderRadius: '50%',
    background: '#412C95',
    color: '#D59DF7',
    padding: '15px',
    fontFamily: 'Montserrat',
    fontSize: '1.20em',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 3px 15px rgb(86, 83, 153)',
      background: '#573CC2',
    },
  };

  return (
    <IconButton color="inherit" size="large" onClick={handleScrollToTop} sx={buttonStyle}>
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollButton;
