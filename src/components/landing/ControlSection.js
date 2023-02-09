import Image from '@material-tailwind/react/Image';
import Control from 'assets/img/control.jpg';
import { Typography, Grid, } from '@mui/material'
import SchoolIcon from '../../assets/img/School Icon.png'
import KeyPointsVid from '../../assets/videos/KeyPoints.gif'
import { styled } from '@mui/material/styles';

const Hide = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.between('xs','sm')]:  { 
      display: 'none'
    },
  }));

  const Minimize = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.between('xs','sm')]:  { 
      width: 'none'
    },
  }));

  

export default function ControlSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full lg:w-5/12 mx-auto" >
                            <Grid className='py-8'>
                                    <Image alt='school icon'
                                    src={SchoolIcon}
                                    />

                                </Grid>
                                <Minimize>
                                    <Grid style={{backgroundColor: '#B8AFD5' }} className='rounded-xl py-4'
                                    container
                                    justifyContent="center"
                                    >
                                        <Typography variant='h5'>
                                        <b>Interactive Environment</b>
                                        </Typography>
                                    </Grid>
                                </Minimize>

                                <Grid
                                container
                                >
                                    <Typography variant='h5' style={{color: '#B8AFD5'}} className='py-8'>
                                    <b>Ditch 2D virtual tours</b>
                                    </Typography>
                                </Grid>
                                <Typography variant='subtitle1' style={{color: '#EBEBEB',}} >
                                Enter the metaverse and interact with your surroundings to learn more about the colleges.
                                </Typography>
                    </div>

                    <div className=" lg:w-4/12 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Hide>
                            <Image 
                                alt="Student model is walking up to a key point to learn about the Burchard Building" 
                                raised={false}
                                src={KeyPointsVid}
                                width='1200' 
                                style={{border:'7px solid rgba(122, 122, 122, 0.38)', borderRadius: '10px'}}
                            />
                        </Hide>

                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
