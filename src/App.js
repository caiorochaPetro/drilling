import logo from './logo.svg';
import './App.css';
import data from './data/mockDrilling.js'
import { useState } from 'react';
import {Box, Typography, AppBar, Toolbar, MenuItem, Container, Menu, Button, IconButton} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import {Adb as AdbIcon} from '@mui/icons-material';
import {Menu as MenuIcon} from '@mui/icons-material'


function App() {
//  const [data,setdata] = useState(data.drillingData);
const [menuStrings, setmenustring]= useState(data.menu);

const [anchorElNav,setAnchorElNav] = useState(null);
const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

  return (
  <ThemeProvider theme={theme}>
    <Box>
      <AppBar position="static">
        <Box>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
          </IconButton>
        </Box>   
        <Toolbar variant="dense">
        <Box>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            {menuStrings.map(function(item){
              return(
                <MenuItem key={item.id} variant="h6" color="inherit" component="div" >
                  {item.String}
                </MenuItem>
                
                
            )})}
        </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuStrings.map((item) => (
              <Button
                key={item.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.String}
              </Button>
            ))}
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default App;
