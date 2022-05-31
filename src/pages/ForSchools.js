import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/forschools/Header';
import Footer from '../components/footers/Footer'
import { Grid, Box } from '@mui/material'
import EmailForm from 'components/forschools/EmailForm';
import Video from 'components/forschools/Video';
import { styled } from '@mui/material/styles';
import MobileNavbar from 'components/navbar/MobileNavbar';

const Root = styled('div')(({ theme }) => ({


    // Match [md, md + 1)
    //       [md, lg)
    //       [900px, 1200px)
    [theme.breakpoints.up('sm')]:  { 
      display: 'none'
    },
  }));

export default function OurStory() {
    return (
        <>
            {/* <div className="absolute w-full z-20">
                <ImagicationNavbar />
            </div> */}
            <Box 
                sx={{ marginBottom: 20}}
            >
               <ImagicationNavbar />
               <Root>
               <MobileNavbar/>
               </Root>
            </Box>
            <main>
            <Grid >
                <Grid item>
                    <Header />
                </Grid>
                <Grid 
                container 
                className='bg-gray-100'   
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Video/>
                </Grid>
            </Grid>

            </main>
                <Footer />
        </>
    );
}
