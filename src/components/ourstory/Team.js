import { Typography, Box, Grid, Card, CardContent, Container} from '@mui/material'
import Diana from  '../../assets/img/1.jpg';
import Bryan from  '../../assets/img/2.PNG'
import Nallely from  '../../assets/img/3.jpg'

export default function Team() {
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
        {
            name: 'Nallely Inoa',
            title: 'Graphic Designer',
            img: Nallely,
        },
    ]
    

    const listTeam = team.map((team,i)=>
        <Grid container >
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
            <Container style={{ display: 'flex'}}>
                {listTeam}
            </Container>
        </Box>
    );
}
