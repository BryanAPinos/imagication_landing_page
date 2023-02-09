import Image from '@material-tailwind/react/Image'
import Intro from 'assets/img/introducing.jpg'
import { Typography, Grid} from '@mui/material'
import SchoolIcon from '../../assets/img/School Icon.png'
import ConnectVideo from '../../assets/videos/stayConnected.gif'
import { styled } from '@mui/material/styles';

const Hide = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.between('xs','sm')]:  { 
      display: 'none'
    },
  }));



export default function IntroSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-full" style={{overflowX:'hidden'}}>
        <section className="pb-20 bg-white-100 -mt-30">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-20">

                        <div className=" lg:w-4/12 mx-auto flex justify-center mt-24 lg:mt-0" style={{}}>
                        <Hide>
                            <Image width='1200' alt ='Craig is meeting up with his friends on Imagication' src={ConnectVideo} style={{border:'7px solid rgba(122, 122, 122, 0.38)', borderRadius: '10px'}}/>
                            </Hide>
                        </div>


                    <div className="lg:w-5/12 px-4 mx-auto">
                        <Grid className='py-8'>
                            <Image alt='school icon'
                            src={SchoolIcon}
                            />

                        </Grid>
                        <Grid style={{backgroundColor: '#B8AFD5'}} className='rounded-xl py-4'
                        container
                        justifyContent="center"

                        >
                            <Typography variant='h5'>
                            <b>Stay Connected</b>
                            </Typography>
                        </Grid>
                        <Grid
                        container
                        

                        >
                            <Typography variant='h5' style={{color: '#B8AFD5'}} className='py-8'>
                            <b>Invite your friends and never feel alone</b>
                            </Typography>
                        </Grid>
                  
                        <Typography variant='subtitle1' style={{color: '#EBEBEB',}} >
                            No cash? No worries. With Imagication, you can plan a virtual trip to any campus and interact with other students! 
                            </Typography>
                    

                    </div>


                </div>
            </div>
        </section>
        </div>
    );
}
