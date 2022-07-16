import { Typography, Container, Grid, Box, Avatar } from '@mui/material'
import K_Person from '../../assets/img/K_Person.png';

export default function Testimonial() {
    return (
        <Box style ={{backgroundColor: 'rgba(138, 138, 138, 0.05)', borderTop: 'solid 1px rgba(138, 138, 138, 0.19)'}}>
            <Grid className=' py-12'
            direction="row"
            style={{display: 'flex', justifyContent: 'center'}}>
                <Grid item
                  container
                  justifyContent="center"
                  alignItems="center"
                    className='bg-white rounded-xl shadow-md'
                    style={{width: '32rem', height: '8rem'}}
                    >
                    <Avatar src={K_Person} sx={{ width: 56, height: 56 }}/>
                    <Grid className='pl-4'>
                        <Typography style={{color: '#535353' ,fontWeight: '500'}}>
                        “I wish I had this when I was college searching”
                        </Typography>
                        <Typography style={{fontSize:'0.875rem', lineHeight:'1.5rem', fontWeight: '300'}}>
                        Koudjedji, High School Senior
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
