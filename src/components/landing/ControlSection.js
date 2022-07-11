import Image from '@material-tailwind/react/Image';
import Control from 'assets/img/control.jpg';
import { Typography } from '@mui/material'

export default function ControlSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <Typography variant='h1'>
                        Interactive Environment
                        </Typography>
                        <Typography variant='subtitle1'>
                        Ditch 2D virtual tours. Enter the metaverse and interact with your surroundings to learn more about the colleges.                        </Typography>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Image 
                            alt="Card Image" 
                            raised={false}
                            src={Control} 
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
