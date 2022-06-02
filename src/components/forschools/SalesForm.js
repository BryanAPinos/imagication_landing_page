import {Box, TextField, Grid, OutlinedInput, InputLabel, FormControl, Button} from '@mui/material'


export default function SalesForm() {


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
                    className='py-8'
                >
                    <Box>
                        <TextField
                        required
                        label='First name'
                        />
                    </Box>
                    <TextField
                    required
                    label='Last Name'
                    />
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Work Email
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Work Email"
                    />
                </FormControl>
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className='py-8'
                >
                <TextField
                    required
                    label='School Name'
                    margin="dense"
                    
                    />
                <TextField
                    required
                    label='Role'
                    />                      
                              
                </Grid>
                <Grid item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    
                >
                    <Box>
                        <TextField
                        required
                        label='Phone Number'
                        />
                    </Box>
                    <TextField
                    required
                    label='How can we help you?'
                    />
                </Grid>
            </Grid>
            <Grid className='pt-8'>
                <Button variant='contained' size='large'>
                    Submit
                </Button>
            </Grid>

        </Box>
    );
}
