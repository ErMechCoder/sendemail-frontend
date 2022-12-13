import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";//
//import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { Link } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const drawerWidth = 240;


const pages = ['HOME', 'BLOG','CONTACT',' RESEARCH'];
const settings = [ 'Dashboard', 'Logout'];


const logo = {
    width: '100px',
    height: '60px',
    boderRadius: '100%',

    margin: 0,
    padding: 0,
}

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const Home=()=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const itemsList = [
    {
      text: "Email Builder",
      icon: <LocalMallIcon style={{ fill: "#59504f" }} />,
      to: "/"
    },
    {
      text: "Chart",
      icon: <AnalyticsIcon  style={{ fill: "#59504f" }} />,
      to: "/dash"
    },
   
  ];

  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar  position="fixed" open={open} style={{ background: '#020424'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon style={{ fill: "#85CEE9" }} />
          </IconButton>
          <Toolbar disableGutters>
         <Avatar style={logo} alt="Remy Sharp" src="data:image/jpeg;base64,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" />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          EmailBuilder
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
      
         <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  alt="Remy Sharp" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </IconButton>
          { <Menu
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
           
                <Typography textAlign="center"   >{page}</Typography>
              </MenuItem>
            ))}
          </Menu> }
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          EmailBuilder
        </Typography>
        { <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'White', display: 'block'  , fontSize:"15px"}}
          
            >
              {page}
            </Button>
          ))}
        </Box> }

        <Box sx={{ flexGrow: 0 }} >
          <Tooltip title="Open settings" >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}style={{marginLeft:570}}>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ fill: "black" }} />
            ) : (
              <ChevronLeftIcon style={{ fill: "black" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem component={Link} to={item.to} button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} style={{ color: "black" }} />
              </ListItem>
              // <ListItemButton
              //   key={text}
              //   sx={{
              //     minHeight: 48,
              //     justifyContent: open ? 'initial' : 'center',
              //     px: 2.5,
              //   }}
              // >
              //   <ListItemIcon
              //     sx={{
              //       minWidth: 0,
              //       mr: open ? 3 : 'auto',
              //       justifyContent: 'center',
              //     }}
              //   >
              //     {index % 2 === 0 ? <EventAvailableOutlinedIcon /> : <AddBoxTwoToneIcon />}
              //   </ListItemIcon>
              //   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              //   {index % 2 === 0 ? <a href="/create">bbb</a> : <a href="/create">aaa</a>}
              // </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <List>
          {["Dark Mode"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                {/* <DarkModeTwoToneIcon style={{ fill: "#020424" }} /> */}
              </ListItemIcon>
              {
                <ListItemText
                  primary={text}
                  style={{ color: "white" }}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              }
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}

export default  Home;