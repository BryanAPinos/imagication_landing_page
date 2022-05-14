import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Typography, Box, Container, Toolbar, Button, Grid,  } from '@mui/material';
import Drawer from '@mui/material/Drawer';
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

export default function ImagicationNavbar() {
    const [state, setState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const links = [
          {
              name: 'Home',
              to: '/'
          },
          {
              name: 'For Schools',
              to: '/forschools'
          },
      ]
    
      const list = () => (
        <Box
        >
          <List>
          {links.map(link => (<Link to={link.to}>{link.name}</Link> ))}
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MenuIcon/>
                  </ListItemIcon>
                  <ListItemText  />
                </ListItemButton>
              </ListItem>

          </List>
        </Box>
      );
    

  return ( 
    <Box sx={{ flexGrow: 1 }}>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {/* <Container
        style={{
          paddingTop: '32px',
        }}
      >
        <Toolbar>
          <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Link to='/'>
                  <Typography variant='button'>
                    Imagication
                  </Typography>
              </Link>
              
            </Grid>

            <Grid item xs={6}>
              <Grid 
                container
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
              >

                <Grid item>
                  <Link to='/'>
                    <Typography variant='button'>
                      Home
                    </Typography>
                  </Link>
                </Grid>

                 <Grid item>
                   <Link to='/forschools'>
                      <Typography variant='button'>
                        For Schools
                      </Typography>
                    </Link>
                  </Grid>
               
               </Grid>  
            </Grid>

            <Grid item>
              <Button 
                variant='contained'
                size='small'
              >
                <Typography variant='button'>
                  Explore
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>  */}
    </Box>
  )
}