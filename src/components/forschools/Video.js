import Explore from 'assets/img/explore.jpg';
import Image from '@material-tailwind/react/Image'
import { Typography } from '@mui/material'


export default function Video() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-8 pt-20" >
                <div className="flex flex-wrap items-center mt-16">
                <div className="w-full md:w-6/12 px-4 mx-auto ">
                    <div className="w-full md:w-6/12 px-4 mx-auto ">
                        <iframe 
                        width="800" 
                        height="500" 
                        src='https://www.youtube.com/embed/E5hqcM2AeSM'
                        title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
                </div>
                </div>
        </section>
        </div>
    );
}
