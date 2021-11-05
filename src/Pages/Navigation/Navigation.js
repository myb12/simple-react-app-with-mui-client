import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import './Navigation.css';

const activeStyle = {
    borderBottom: '2px solid #fff',
    paddingBottom: 6
}

const Navigation = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [burgerItem, setBurgerItem] = useState(false);
    const mobileDevice = useMediaQuery('(max-width:600px)');
    console.log(mobileDevice);

    const handleClick = () => {
        setBurgerItem(!burgerItem);
    }


    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    //   console.log(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className="app-bar" sx={{ flexGrow: 1 }}>
            {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
            <AppBar position="static">
                <Toolbar>
                    <span href="/#" className={!mobileDevice ? 'display-none' : 'nav-icon'} onClick={handleClick}>
                        <FaBars />
                    </span>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Photos
                    </Typography>
                    <Box className={mobileDevice ? 'display-none' : 'nav'}>
                        <NavLink activeStyle={activeStyle} to="/" className="nav-item">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/service" className="nav-item">
                            Services
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about" className="nav-item">
                            About
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact-us" className="nav-item">
                            Contact us
                        </NavLink>
                    </Box>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Box sx={{ bgcolor: 'primary.main' }} className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <FaWindowClose className="icon-close" onClick={handleClick} />
                <NavLink activeStyle={activeStyle} to="/">
                    Home
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/services">
                    Services
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/about-us">
                    About
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/contact-us">
                    Contact us
                </NavLink>
            </Box>
        </Box>
    );
};

export default Navigation;