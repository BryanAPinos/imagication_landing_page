import React from 'react'
import { Typography, Box, Avatar, Toolbar, AppBar, Container, Button, Grid } from '@mui/material'
import ImagicationLogo from '../../assets/img/logo.png'

// FontAwesome for social  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 


export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                    position='static'
                    color="primary" 
                    sx={{ top: 'auto', bottom: 0 }}
                >
                <Container
                    style={{
                        paddingTop: '50px',
                        paddingBottom: '50px'
                    }}
                >
                    <Toolbar>
                        <Grid 
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item>
                                <img src ={ImagicationLogo}/>
                                {/* <Avatar alt='Imagication' src={ImagicationLogo}/> */}
                            </Grid>

                            <Grid item>
                                <Typography variant='h2'>
                                    Imagication
                                </Typography>
                                <Typography variant='subtitle2'>
                                Providing the guidance counselor you deserve
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant='h2'>
                                    Contact
                                </Typography>
                                <Typography variant='subtitle2'>
                                    info@imagication.co
                                </Typography>
                                {/* <Typography variant='subtitle2'>
                                    201-663-5412
                                </Typography> */}

                            </Grid>

                            <Grid item>

                                <Grid 
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={3}
                                >
                                    <Grid item>
                                        <Typography variant='h3'>
                                            <a href = "https://www.instagram.com/imagication.co/" target="_blank">
                                            <FontAwesomeIcon icon={brands('instagram')} />
                                            </a>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h3'>
                                        <a href='https://www.tiktok.com/@imagication_' target="_blank">
                                            <FontAwesomeIcon icon={brands('tiktok')} />
                                        </a>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h3'>
                                        <a href='https://www.linkedin.com/company/imagication' target="_blank">
                                            <FontAwesomeIcon icon={brands('linkedin')} />
                                        </a>
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}