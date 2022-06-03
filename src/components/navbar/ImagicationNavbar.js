import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Box, Container, Toolbar, Button, Grid,  } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({


  // Match [md, md + 1)
  //       [md, lg)
  //       [900px, 1200px)
  [theme.breakpoints.between('xs', 'sm')]: {
    display: 'none'
  },
}));


export default function ImagicationNavbar() {
  return ( 
<Root>
    <Box sx={{ flexGrow: 1 }}>
      <Container
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
          {/* Title */}
            <Grid item>
              <Link to='/'>
                  <Typography variant='button'>
                    Imagication
                  </Typography>
              </Link>
              
            </Grid>

          {/* Links to pages */}
          {/* <styles> */}
          
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
                  <Link to='/ourstory'>
                    <Typography variant='button'>
                      Our Story
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
          
          {/* Button */}
         
            <Grid item>
              <Button 
                variant='contained'
                size='small'
              >
                <a href='https://bryanapinos.github.io/ImagicationUnityBuilds/' target="_blank" rel="noopener noreferrer">
                <Typography variant='button' className='md:disappear'>
                  Launch Imagication
                </Typography>
                </a>
              </Button>

            </Grid>
       
            {/* </styles> */}
          </Grid>
        </Toolbar>
      </Container> 
    </Box>
    </Root>
  )
}