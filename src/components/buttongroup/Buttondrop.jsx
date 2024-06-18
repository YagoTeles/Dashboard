import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { styled } from '@mui/material/styles';

const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    width: '100%',
  },
}));

function Buttondrop({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonWidth(event.currentTarget.offsetWidth);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownRoundedIcon />}
        style={{ width: '200px' }} 
      >
        Open Popover
      </Button>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: buttonWidth,
          },
        }}
      >
        <div style={{ padding: '10px' }}>
          {children}
        </div>
      </StyledPopover>
    </div>
  );
}

export default Buttondrop;
