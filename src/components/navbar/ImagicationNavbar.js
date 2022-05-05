import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Box, Container, Toolbar, Button, Grid,  } from '@mui/material';

export default function ImagicationNavbar() {
  return ( 
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
                <Typography variant='button'>
                  Explore
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container> 
    </Box>
  )
}