import {Box, TextField, Grid, OutlinedInput, InputLabel, FormControl, Button, Snackbar, Typography} from '@mui/material'
import React, {useState} from 'react'
import MuiAlert from "@mui/material/Alert";
import Dave from '../../assets/img/Dave.png'
import Image from '@material-tailwind/react/Image';
import { DataSaverOffRounded } from '@mui/icons-material';
var Airtable = require('airtable')
var base = new Airtable({apiKey: 'keyMWwdaxj6E6CFik'}).base('appIBO0Hqnl5sk2Wm');




export default function SalesForm() {

    // var email, firstName, lastName, number, school;
    var current = new Date() 
    var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = function (e) {
        // if (firstName || lastName || email || school || number == "") {
        //     alert("There is a field missing information");
        //     return false;
        // }
        base('School').create([
            {
                'fields': {
                    'First Name': firstName,
                    'Last Name': lastName,
                    'Email': email,
                    'School': school,
                    'Number': number,
                    'Date': cDate,
                    'help': help
                }
            }
        ])
        setOpen(true);
    }
    const [email, setEmail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [school, setSchool] = useState("");
    const [number, setNumber] = useState("");
    const [help, setHelp] = useState("");

    const [open, setOpen] = useState(false);
    const [empty, setEmpty] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
        setEmpty(false);
    };


    return (
        <Box className='py-16' 
        >
            <Grid container justifyContent='center'>
                <Typography variant ='h3'>
                Become one of the first schools to join the metaverse!
                </Typography>
            </Grid>
            
            <Grid container className='py-8'
                    justifyContent='center'
                    
                    // style={{flexShrink: '1'}}
                    alignItems='center'
            >

               <Grid style={{paddingRight: '5rem'}}>
                    <Image style={{width: '18rem'}}  src={Dave} />
                </Grid>
 
            <Grid className="shadow-lg p-8" >
                <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        
                    >
                        <Box className='py-4' style={{flexGrow: '1'}}>
                            <TextField
                            required
                            label='First name'
                            value={firstName}
                            style={{width: '95%'}}
                            onChange={(e) => setfirstName(e.target.value)}
                            
                            />
                        </Box>
                        <Box className='py-4' style={{ flexGrow: '1'}}>
                            <TextField
                            required
                            label='Last Name'
                            style={{width: '100%'}}
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            />
                        </Box>

                    </Grid>
                    <Grid item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        className='py-4'
                    >
                    <FormControl required fullWidth >
                        <InputLabel htmlFor="outlined-adornment-amount">Email
                        </InputLabel>
                        <OutlinedInput
                            id="email"
                            label="Email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    </Grid>
                    <Grid item
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        
                    >
                        <Box className='py-4'style={{ flexGrow: '1'}}>
                            <TextField
                                required
                                label='School Name'
                                margin="dense"
                                value={school}
                                style={{width: '95%'}}
                                onChange={(e) => setSchool(e.target.value)}
                                
                                />     
                        </Box>     
                        <Box className='py-4' style={{ flexGrow: '1'}}> 
                            <TextField
                            required
                            // helperText='Format: (123)-456-7890'
                            label='Phone Number'
                            value={number}
                            style={{width: '100%'}}
                            onChange={(e) => setNumber(e.target.value)}
                            />   
                            </Box>                         
                                
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box className='py-4'style={{ flexGrow: '1'}}>
                            <TextField
                            label='How can we help you?'
                            rows={4}
                            style={{width: '100%'}}
                            value={help}
                            onChange={(e) => setHelp(e.target.value)}
                            multiline
                            />
                        </Box>

                        
                    </Grid>
                </Grid>
                <Grid className='pt-8'>
                    <Button variant='contained' size='large' onClick={handleClick}>
                        Submit
                    </Button>
                </Grid>
                    </Grid>
                        </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Our Sales Team will contact you soon
                </Alert>
            </Snackbar>
        </Box>
    );
}
