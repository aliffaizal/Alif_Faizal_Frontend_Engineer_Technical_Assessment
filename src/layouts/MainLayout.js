import React from 'react'
import { AppBar, Box, Toolbar, Typography, MenuItem } from '@mui/material';
import { useNavigate } from "react-router";
import './MainLayout.css'

const MainLayout = ({children}) => {
  const navigate = useNavigate();
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} className='nav'>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" component="div">
                Necktie Test
              </Typography>
            <MenuItem onClick={() =>navigate(`/`)}>
              <Typography className='btn' variant="h6" component="div">
                Doctor's List
              </Typography>
            </MenuItem>
            <MenuItem onClick={() =>navigate(`/booking-list`)}>
              <Typography className='btn' variant="h6" component="div">
                Booking List
              </Typography>
            </MenuItem>
          </Toolbar>
        </AppBar>
     </Box>
     <main>{children}</main>
    </div>
  )
}

export default MainLayout