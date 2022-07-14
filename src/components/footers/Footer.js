import React from 'react'
import { Typography, Box, Avatar, Toolbar, AppBar, Container, Button, Grid } from '@mui/material'
import ImagicationLogo from '../../assets/img/logo.png'

// FontAwesome for social  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                    position='static'
                    
                    sx={{ top: 'auto', bottom: 0 }}
                    style={{backgroundColor: '#2F2649'}}
                >
                <Container
                    style={{
                        paddingTop: '50px',
                        paddingBottom: '50px',
                        
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
                            <Grid item style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                                <img className="h-16" src ={ImagicationLogo}/>
                                <Typography variant='h6' style={{paddingLeft: ''}} className='px-6'>
                                    Imagication, Inc 2022
                                </Typography>
                                {/* <Avatar alt='Imagication' src={ImagicationLogo}/> */}
                            </Grid>



                            <Grid item >

                                <Grid 
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    
                                    spacing={3}
                                >
                                    <Grid item>
                                        <Typography variant='h3'>
                                            <a href = "mailto:info@imagication.co" target="_blank">
                                            <EmailIcon fontSize='large'/>
                                            </a>
                                        </Typography>
                                    </Grid>                                    
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