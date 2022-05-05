import React from 'react'
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
              <Button variant='text'>
                <Typography variant='button'>
                  Imagication
                </Typography>
              </Button>
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
                  <Button variant='text'>
                    <Typography variant='button'>
                      Home
                    </Typography>
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant='text'>
                    <Typography variant='button'>
                      Our Story
                    </Typography>
                  </Button>
                 </Grid>

                 <Grid item>
                   <Button variant='text'>
                      <Typography variant='button'>
                        For Schools
                      </Typography>
                    </Button>
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