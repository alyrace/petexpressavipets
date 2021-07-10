import React, {useState} from 'react';
import clsx from 'clsx';
import {AppBar, CssBaseline, Drawer, IconButton, makeStyles, Toolbar, Typography, useTheme} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CancelIcon from'@material-ui/icons/Cancel';


//==============================================================
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
  
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    menu: {
      flexGrow: 1,
    },
  }));
  
//=============================================================

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}>
                <Toolbar>
                <IconButton color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        flexGrow= '1'
                    >
                        <MenuIcon />
                    </IconButton>
                  <Typography variant="h6" noWrap className={classes.title}>
                      AVI Pets
                    </Typography>  
                </Toolbar>
            </AppBar> 
            <Drawer className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <CancelIcon color='secondary' />}
                </IconButton>
              </div>
            </Drawer> 
        </div>
    )
}

export default Navbar;
