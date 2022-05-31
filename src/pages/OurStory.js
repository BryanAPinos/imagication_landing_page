import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/ourstory/Header';
import Footer from '../components/footers/Footer'
import { Typography, Button, Grid} from '@mui/material'
import OurStoryText from 'components/ourstory/OurStoryText';
import Team from '../components/ourstory/Team.js'
import SlideShow from 'components/ourstory/SlideShow';

export default function ForSchools() {
    return (
        <>
        <Grid 
        
        >
            <Grid item >
                {/* <div className="absolute w-full z-20"> */}
                    <ImagicationNavbar />
                {/* </div> */}
            </Grid>
            <Grid item >
                <main>
                    <Header />
                </main>
            </Grid>

            <Grid item>
                <OurStoryText/>
            </Grid>
            <Grid>
                <Team/>
            </Grid>


            <Footer />
            </Grid>
        </>
    );
}
