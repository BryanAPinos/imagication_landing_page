import React from 'react'
import { Box, Paper, Card, CardContent, Typography, Button, TextField, Grid, Container} from '@mui/material'

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
            <Grid
            container
            direction="column"
            alignItems="center"
            className="pb-20 bg-white-100 -mt-8"

            >

                <Paper
                    elevation={3}
                >
                    <Card 
                        style={{minWidth: '25vw'}}
                    >
                        <CardContent>
                            <Grid 
                                container
                                direction='column'
                                alignItems='center'
                                justifyContent="flex-start"
                                style={{width: '100%'}}
                            >
                            <Typography variant='h2'>
                                Get In Touch
                            </Typography >
                                <Grid item
                                // direction='column'
                                // alignItems='center'
                                // justifyContent="flex-start" 
                                className="pb-5 pt-5 -mt-8"                              
                                // style={{backgroundColor: 'purple'}}
                                >
                                    <Grid 
                                    item
                                    >
                                        <Grid item >
                                            <Typography variant='subtitle2'>
                                                Full Name
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <TextField style={{minWidth: '20vw'}}variant='outlined' id='name' onChange={handleChangeInput} />
                                            
                                        </Grid>
                                        <Grid item className="pt-3 -mt-8" >
                                            <Typography variant='subtitle2'>
                                                Email
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <TextField style={{minWidth: '20vw'}} variant='outlined' id='email' onChange={handleChangeInput} />
                                            
                                        </Grid>
                                        <Grid item className="pt-3 -mt-8" >
                                            <Typography variant='subtitle2'>
                                                School
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <TextField style={{minWidth: '20vw'}} variant='outlined' id='school' onChange={handleChangeInput} />
                                        </Grid>
                                        <Grid item className="pt-3 -mt-8"  >
                                            <Typography variant='subtitle2'>
                                                Phone Number
                                            </Typography>
                                        </Grid>
                                        <Grid item > 
                                            <TextField style={{minWidth: '20vw'}} variant='outlined' id='school' onChange={handleChangeInput} />
                                        </Grid>
                                        <Grid item style = {{width: '100%'}}
                                        className="pb-5 pt-10 -mt-8"  
                                        >
                                            <Button
                                                variant='contained'
                                                onClick={handleClick}
                                                size="large"
                                            >
                                                <Typography size='large'>
                                                    Request Demo
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>    
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
                </Grid>
        )
    }
}

export default EmailForm