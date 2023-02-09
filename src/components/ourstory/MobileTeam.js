import { Typography, Button, Box, Grid, Card, CardContent, CardMedia, Container} from '@mui/material'
import Diana from  '../../assets/img/1.jpg';
import Bryan from  '../../assets/img/2.PNG'

export default function OurStoryText() {
    const team = [
        {
            name: 'Diana Rosado',
            title: 'CEO & Co-Founder',
            img: Diana,
        },
        {
            name: 'Bryan Pinos',
            title: 'CTO & Co-Founder',
            img: Bryan,
        },
    ]
    

    const listTeam = team.map((team,i)=>
        <Grid container className='pb-10'
        justifyContent="center"
        alignItems="center"
        >
            <Card key ={i} style={{boxShadow: '-5px 3px 11px 1px rgba(0,0,0,0.1)'}}>
                <CardContent>
                    <Typography variant='subtitle2'>
                        {team.title}
                    </Typography>
                    <Typography variant='h6'>
                        {team.name}
                    </Typography>
                </CardContent>
                <div className='h-64 w-64'>
                    <img src={team.img} alt={"pictures"} ></img>
                </div>
            </Card>
        </Grid>
    );

    return (
        <Box className='pb-36 pt-8'>
            <Typography variant ='h2' className='text-center pb-10' style={{fontWeight:'600', color: '#3D325F'}}>
                Meet the Team
            </Typography>
            <Container>
                {listTeam}
            </Container>
        </Box>
    );
}
