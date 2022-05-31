import Image from '@material-tailwind/react/Image';
import { Typography, Button, Divider } from '@mui/material'

export default function OurStoryText() {
    

    return (
        <div className="">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="flex flex-col justify-center items-center w-full md:w-7/12 px-4 mx-auto font-bold">
                        {/* <Typography variant='h5' style={{fontWeight: '600', color: '#3D325F'}}>
                            Our Story
                        </Typography> */}
                        <div className = ' w-160 max-w-7xl'>
                            <Typography variant='subtitle1' style={{color: '#4A4657'}}>
                            Imagication’s co-founders, Diana Rosado and Bryan Pinos wanted to level 
                            the playing field for education. After many conversations, they revolutioned 
                            college tours - one where students can walk around and interact with current 
                            college students.  
                            </Typography>
                        </div>
                    </div>                    
                </div>
            </div>

        </section>
        </div>
    );
}
