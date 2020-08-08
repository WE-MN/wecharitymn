import React from 'react';
import {AppBar, Toolbar, Typography, Button, Menu, MenuItem} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import {MoreVert, TextRotationNoneOutlined} from '@material-ui/icons'
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
      marginRight: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appbar: {
      background: '#02a3da'
    },
    navigationLinks: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
      marginRight: theme.spacing(2),
      textDecoration: 'none',
      color: 'white',
      '&:hover': {
        color: '#D4D4D4',
        cursor: 'pointer', 
      }
    }

  }));


const NavigationBar = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const date = new Date()
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const renderMenu = (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    )

    return(
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  WE Charity MN
                </Typography>
                <Typography variant="20px" className={classes.navigationLinks} >
                  <div>
                    <Link to='/' className={classes.link}>HOME</Link>
                  </div>
                  <div>
                  <Link to='/about' className={classes.link}>ABOUT</Link>
                  </div>
                  <div>
                    <Link to='/events' className={classes.link}>EVENTS</Link>
                  </div>
                  <div>
                    <Link to='/contact' className={classes.link}>CONTACT</Link>
                  </div>
                </Typography>

              <IconButton 
                aria-label="show more" 
                aria-haspopup="true" 
                color="inherit"
                aria-controls={handleClick} 
                onClick={handleClick} 
                >
                <EmailIcon/>
              </IconButton>
              <IconButton 
                aria-label="show more" 
                aria-haspopup="true" 
                color="inherit"
                aria-controls={handleClick} 
                onClick={handleClick} >
                <MoreVert/>
              </IconButton>
              {renderMenu}
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;