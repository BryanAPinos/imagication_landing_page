import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/ourstory/Header';
import Footer from '../components/footers/Footer'
import {Grid} from '@mui/material'
import OurStoryText from 'components/ourstory/OurStoryText';
import Team from '../components/ourstory/Team.js'
import { styled } from '@mui/material/styles';
import MobileNavbar from 'components/navbar/MobileNavbar';
import MobileTeam from '../components/ourstory/MobileTeam.js';
export default function ForSchools() {
    const Root = styled('div')(({ theme }) => ({


        [theme.breakpoints.up('md')]:  { 
          display: 'none'
        },
      }));

      const RespTeam = styled('div')(({ theme }) => ({


        // Match [md, md + 1)
        //       [md, lg)
        //       [900px, 1200px)
        [theme.breakpoints.down('md')]:  { 
          display: 'none'
        },
      }));
    
    return (
        <>
        <Grid 
        
        >
            <Grid item >
                {/* <div className="absolute w-full z-20"> */}
                    <ImagicationNavbar />
                {/* </div> */}
                <Root>
               <MobileNavbar/>
               </Root>
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
                <RespTeam>
                    <Team/>
                </RespTeam>
                
                <Root>
                    <MobileTeam/>
                </Root>

            </Grid>


            <Footer />
            </Grid>
        </>
    );
}
