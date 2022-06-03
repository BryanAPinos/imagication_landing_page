import {Box, TextField, Grid, OutlinedInput, InputLabel, FormControl, Button, Snackbar} from '@mui/material'
import React, {useState} from 'react'
import MuiAlert from "@mui/material/Alert";


var Airtable = require('airtable')
var base = new Airtable({apiKey: 'keyMWwdaxj6E6CFik'}).base('appIBO0Hqnl5sk2Wm');




export default function SalesForm() {

    // var email, firstName, lastName, number, school;
    var current = new Date() 
    var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = function (event) {
        if (firstName || lastName || email || school || number == "") {
            alert("There is a field missing information");
            return false;
        }
        base('School').create([
            {
                'fields': {
                    'First Name': firstName,
                    'Last Name': lastName,
                    'Email': email,
                    'School': school,
                    'Number': number,
                    'Date': cDate
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
        <Box className="shadow-lg p-8 " style={{ width: '45vw'}}
        >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
                <Grid item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    
                >
                    <Box className='py-4'>
                        <TextField
                        required
                        label='First name'
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        
                        />
                    </Box>
                    <Box className='py-4'>
                        <TextField
                        required
                        label='Last Name'
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
                    <InputLabel htmlFor="outlined-adornment-amount">Work Email
                    </InputLabel>
                    <OutlinedInput
                        id="email"
                        label="Work Email"
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
                    <Box className='py-4'>
                        <TextField
                            required
                            label='School Name'
                            margin="dense"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            
                            />     
                    </Box>     
                    <Box className='py-4'> 
                        <TextField
                        required
                        // helperText='Format: (123)-456-7890'
                        label='Phone Number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />   
                        </Box>                         
                              
                </Grid>
            </Grid>
            <Grid className='pt-8'>
                <Button variant='contained' size='large' onClick={handleClick}>
                    Submit
                </Button>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Thank you for subscribing!
                </Alert>
            </Snackbar>
        </Box>
    );
}
