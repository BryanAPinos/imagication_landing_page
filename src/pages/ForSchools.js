import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/forschools/Header';
import Footer from '../components/footers/Footer'
import { Grid, Box } from '@mui/material'
import EmailForm from 'components/forschools/EmailForm';
import Video from 'components/forschools/Video';


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
            </Box>
            <main>
            <Grid >
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container className='bg-gray-100'>
                    <Video/>
                </Grid>
            </Grid>

            </main>
                <Footer />
        </>
    );
}
