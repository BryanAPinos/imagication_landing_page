import React, {useState} from 'react'
import { Box, Paper, Card, CardContent, Typography, Button, TextField, Grid, Container} from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { isNullishCoalesce } from 'typescript';


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
            <Container
            className="pb-20 pt-20 -mt-8"
            style={{maxWidth: '800px',minWidth: '100px'}}
            >
                <Paper
                    elevation={3}
                >
                    <Card >
                        <CardContent>
                            <Grid 
                            container
                            justifyContent='center'
                            >
                                <Grid item
                                >
                                    <Typography variant='h4'>
                                        You have to see it to believe it!
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        Join our mailing list to stay updated with Imagication.
                                    </Typography>
                                </Grid>

                                <Grid item className="pb-5 pt-5 -mt-8">
                                        <Grid item>
                                            <Typography variant='subtitle2'>
                                            Email
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <TextField style ={{minWidth: '32vw'}} variant='outlined' id='email' onChange={handleChangeInput} />
                                            
                                        </Grid>
                                        <Grid item className="pb-5 pt-5 -mt-8"  >
                                            <Button
                                                variant='contained'
                                                onClick={handleClick}
                                                size="large"
                                            >
                                                <Typography>
                                                    Subscribe
                                                </Typography>
                                            </Button>

                                            
                                        </Grid> 
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
                
            </Container>
        )
    }
}

export default EmailForm