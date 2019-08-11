import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';import './Nav.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Nav() {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            Whale Hub
          </Typography>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <Typography color="inherit" variant="title">
                  Whale Map
               </Typography>
              </ListItemText>
              <ListItemText inset>
                <Typography color="inherit" variant="title">
                  Testimonies
               </Typography>
              </ListItemText>
            </ListItem >
          </List>
          <Button className="loginButton" color="primary" variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
