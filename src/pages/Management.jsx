import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ListItem1 from "../components/listItem";

import Datamanagement from "../components/Departments";


import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';





const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  frame_paper:{
    color: "white",
    [theme.breakpoints.down("xs")]: {

      // backgroundColor: "purple",
      marginTop: "-70px",
    
      width:"290px",
      margin:"auto"
      
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "-90px",
      // backgroundColor: "blue",
      width:"100%",
      marginLeft:"10px",
      

    },
    "@media (min-width: 1280px)": {
      marginTop: "-10px",
      // backgroundColor: "red"
    }
  
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  // added the footer class
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end"
  }
}));

export default function Management() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style={{backgroundColor: "#00e32b"}}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
             <div style={{display: "flex"}}>
      <Avatar alt="Remy Sharp" src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/118160407_322534765780395_724366523687678524_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BT5FvF_C_vAAX9EJtPo&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-4fteixIAva7qm4dP2Cb0gYT0XUVwn3PndYPn3j_7L0Q&oe=628D8710" />
<p style={{marginTop: "10px", marginLeft: "10px", fontSize: "15", fontWeight: "600", color: "black"}}>Sky</p>
          </div>
         
          </Typography>
              
          <Link to="/Addpage">
            <IconButton color="inherit">


              <PersonAddRoundedIcon style={{ fontSize: "30px" }} />

            </IconButton>
          </Link>
         

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <List><ListItem1 /></List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.frame_paper} >
            <div style={{ height: "600px" }}>


              <Datamanagement />

            </div>

          </Paper>
        </Container>
        {/* <Copyright /> */}
      </main>
    </div>
  );
}