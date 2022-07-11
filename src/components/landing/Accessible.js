import Image from '@material-tailwind/react/Image'
import Intro from 'assets/img/introducing.jpg'
import { Typography } from '@mui/material'


export default function Accessible() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-30">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-20">
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Image 
                            alt="Card Image" 
                            raised={false}
                            src={Intro} 
                        />
                    </div>
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <Typography variant='h1'>
                        Always Accessible
                        </Typography>
                        <Typography variant='subtitle1'>
                        No download necessary. Just a laptop and you!                        
                        </Typography>
                    </div>


                </div>
            </div>
        </section>
        </div>
    );
}
