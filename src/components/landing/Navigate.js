import { Typography, Container, Box, Grid, Button} from '@mui/material'
import Craig from 'assets/img/test.png'
import { Link } from "react-router-dom";


export default function Navigate() {
    return (
        <Box>
            <Grid container direction='column' justifyContent='center' alignItems='center' className='py-12' >
                <Grid item> 
                    <img style={{width: '12rem'}} src={Craig} alt='Craig Icon'/>
                </Grid>

                <Typography variant='h3' className='py-8'>
                    Want to visit your dream school?
                </Typography>

                <Grid item>
                        <Link to='/forschools'>
                            <Button variant='contained'>
                                Invite a College
                            </Button>
                        </Link>
                </Grid>
                </Grid>
            </Box>
    );
}
