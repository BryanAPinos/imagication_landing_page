import Explore from 'assets/img/explore.jpg';
import Image from '@material-tailwind/react/Image'
import { Typography } from '@mui/material'


export default function ExploreSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <Typography variant='h1'>
                            Explore without limitations.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Explore the endless possibilities in the comfort of your own home.  
                        </Typography>
                    </div>                    
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Image
                            alt="Explore Image" 
                            raised={false}
                            src={Explore} 
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
