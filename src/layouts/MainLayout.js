import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CustomRouterLink from '../components/CustomRouterLink/CustomRouterLink';
import './MainLayout.css'

const MainLayout = ({children}) => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} className='nav'>
        <AppBar position="static">
          <Toolbar>
            <Typography className='btn' variant="h6" component="div" sx={{ flexGrow: 1 }} href='/'>
              Doctor's List
            </Typography>
            <Typography variant="h6" component="div">
              Necktie Test
            </Typography>
          </Toolbar>
        </AppBar>
     </Box>
     <main>{children}</main>
    </div>
  )
}

export default MainLayout