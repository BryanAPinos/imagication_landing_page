import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/forschools/Header';
import Footer from '../components/footers/Footer'
import { Grid, Box } from '@mui/material'
import EmailForm from 'components/forschools/EmailForm';


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
            <Grid style ={{height: '55vh'}}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid>
                    {/* <EmailForm/> */}
                </Grid>
            </Grid>

            </main>
                <Footer />
        </>
    );
}
