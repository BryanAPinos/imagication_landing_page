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

export default function Alerts() {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: '',
    //     }
    // }

    const [open, setOpen] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [value, setValue] = useState("");

    var current = new Date() 
    var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

    function subscribe(e) {
        e.preventDefault();
        // setEmail(value);
        if (value === "") {
            console.log("No Good");
            setEmpty(true);
        } else {
            console.log(value);
            base("Mailing List").create(
                [
                    {
                        fields: { Email: value, Date: cDate },
                        
                        
                    },
                ],
                function (err, records) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    records.forEach(function (record) {
                        console.log(record.getId());
                    });
                }
            );
            setValue(" ");
            setOpen(true);
        }
        // setSuccess("visible");
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        setEmpty(false);
    };


        

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
                                            <TextField style ={{minWidth: '32vw'}} variant='outlined' id='email' onChange={(e) => setValue(e.target.value)} />
                                            
                                        </Grid>
                                        <Grid item className="pb-5 pt-5 -mt-8"  >
                                            <Button
                                                variant='contained'
                                                onClick={subscribe}
                                                size="large"
                                            >
                                                <Typography>
                                                    Explore
                                                </Typography>
                                            </Button>

                                            
                                        </Grid> 
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                                Thank you for subscribing!
                            </Alert>
                        </Snackbar>
                        <Snackbar open={empty} autoHideDuration={1000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                                Please add an email!
                            </Alert>
                        </Snackbar>
                    </Card>
                </Paper>
            </Container>
        )
    }

