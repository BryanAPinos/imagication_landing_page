import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/forschools/Header';
import Footer from '../components/footers/Footer'
import { Grid, Box } from '@mui/material'
import Video from 'components/forschools/Video';
import { styled } from '@mui/material/styles';
import MobileNavbar from 'components/navbar/MobileNavbar';
import SalesForm from 'components/forschools/SalesForm.js';
import SmallerVideo from 'components/forschools/SmallerVideo';

const Root = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.up('md')]:  { 
      display: 'none'
    },
  }));

  const MinimizeVideo = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.up('md')]:  { 
      display: 'none',
    },
  }));

  const MaxVideo = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.down('md')]:  { 
      display: 'none',
    },
  }));


export default function OurStory() {
    return (
        <>
            <Box sx={{ marginBottom: 10}}>
               <ImagicationNavbar />
               <Root>
                    <MobileNavbar/>
               </Root>
            </Box>
            <main>
           
                <Grid item>
                    <Header />
                </Grid>
               
                <Grid 
                container 
                className='bg-gray-100'   
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <MaxVideo>
                        <Video/>
                    </MaxVideo>
                        
                    
                    
                    <MinimizeVideo>
                        <SmallerVideo/>
                    </MinimizeVideo>
                    
                    
                </Grid>


            <SalesForm/>

            </main>
                <Footer />
        </>
    );
}
