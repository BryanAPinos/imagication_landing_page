import React from 'react'
import { Box, Paper, Card, CardContent, Typography, Button, TextField, Grid } from '@mui/material'

var Airtable = require('airtable')
Airtable.configure({
    endpointURL: 'https://api.airtable.com', 
    apiKey: 'keyMWwdaxj6E6CFik'
})

var base = Airtable.base('appFXGuwbT0EsyH3W')

class EmailForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    render () {
        var email; 
        var current = new Date() 
        var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

        const handleClick = function (event) {
            base('Mailing List').create([
                {
                    'fields': {
                        'Email': email,
                        'Date': cDate
                    }
                }
            ])
        }

        const handleChangeInput = function (event) {
            email = event.target.value
        }

        return (
            <Box sx={{
                display: 'flex'
            }}>
                <Paper
                    elevation={3}
                >
                    <Card>
                        <CardContent>
                            <Grid 
                                container
                                direction='column'
                                justifyContent='space-around'
                                alignItems='center'
                            >
                                <Grid item>
                                    <Typography variant='h4'>
                                        You have to see it to believe it!
                                    </Typography>
                                    <Typography variant='caption'>
                                        Request a demo for Imagication!
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Grid 
                                        container
                                        direction='row'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Grid item>
                                            <Typography>
                                                Enter Email
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <TextField variant='outlined' id='email' onChange={handleChangeInput} />
                                            
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant='contained'
                                                onClick={handleClick}
                                            >
                                                <Typography>
                                                    Explore
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>    
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        )
    }
}

export default EmailForm