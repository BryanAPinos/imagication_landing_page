import Image from '@material-tailwind/react/Image'
import Intro from 'assets/img/introducing.jpg'
import { Typography, Grid } from '@mui/material'
import SchoolIcon from '../../assets/img/School Icon.png'
import AccessibleVid from '../../assets/videos/Accessible.gif'
import { styled } from '@mui/material/styles';

const Hide = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.between('xs','sm')]:  { 
      display: 'none'
    },
  }));

export default function Accessible() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-30">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-20">
                    <div className="lg:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0" >
                        <Hide>
                        <Image width='1200' alt ='Craig is meeting up with his friends on Imagication' src={AccessibleVid} style={{border:'7px solid rgba(122, 122, 122, 0.38)', borderRadius: '10px'}}/>

                        </Hide>
                    </div>
                    <div className=" w-full lg:w-5/12 px-4 mx-auto">
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
                            <b>Always Accessible</b>
                            </Typography>
                        </Grid>
                        <Grid
                        container
                        

                        >
                            <Typography variant='h5' style={{color: '#B8AFD5'}} className='py-8'>
                            <b>No download necessary</b>
                            </Typography>
                        </Grid>
                        <Typography variant='subtitle1' style={{color: '#EBEBEB'}} >
                        Just a laptop and you!                        
                        </Typography>
                    </div>


                </div>
            </div>
        </section>
        </div>
    );
}
