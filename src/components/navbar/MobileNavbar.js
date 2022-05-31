import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Typography, Box, Container, Toolbar, Button, Grid,  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Drawer } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function MobileNavbar() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

    

  return ( 
    <AppBar position="static">
      <Container maxWidth="md" disableGutters="true">
        <Toolbar>

            <Typography variant="h3" sx={{flexGrow: 1, fontWeight: 500}}>
              Imagication
            </Typography>

            <Box component="div" sx={{
              display: {
                xs: 'none',
                sm: 'block',
              }
            }}>
      
            </Box>

            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                mr: 2,
                display: {
                  xs: 'block',
                  sm: 'none',
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              //from which side the drawer slides in
              anchor="right"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#dbc8ff",
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                  <IconButton sx={{mb: 2}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{mb: 2}} />

                  <Box sx={{mb: 2}}>
                    <Link to='/'>
                    <ListItemButton>
                      <ListItemIcon>
                      <HomeIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                    </Link>

                    <Link to='/ourstory'>
                    <ListItemButton>
                      <ListItemIcon>
                        <LightbulbIcon/>
                      </ListItemIcon >
                      <ListItemText primary="Our Story" />
                    </ListItemButton>
                    </Link>

                    <Link to='/forschools'>
                    <ListItemButton>
                      <ListItemIcon>
                        <SchoolIcon/>
                      </ListItemIcon >
                      <ListItemText primary="For Schools" />
                    </ListItemButton>
                    </Link>
                  </Box>
                  
     

                  {/* <Box sx={{
                    display: "flex", 
                    justifyContent:"center", 
                    position: "absolute", 
                    bottom: "5%", 
                    left: "50%", 
                    transform: "translate(-50%, 0)"}}
                  >
                    <a href='https://bryanapinos.github.io/ImagicationUnityBuilds/' target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" sx={{m:1, width: .8}}>Explore</Button>
                    </a>
                  </Box> */}
                </Box>
              
            </Drawer>
           

          </Toolbar>
      </Container>
    </AppBar>
   
  )
}