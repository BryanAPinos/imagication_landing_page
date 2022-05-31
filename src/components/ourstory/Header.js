import Image from '@material-tailwind/react/Image';
import { Typography, Button, } from '@mui/material'

export default function Header() {
    return (
        <div className="">
        <section className=" bg-white-100 -mt-8">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="flex flex-col justify-center items-center w-full md:w-7/12 px-4 mx-auto font-bold">
                        <Typography variant='h2' style={{fontWeight: '600', color: '#4A4657'}}>
                            Student-First Initiative 
                        </Typography>
                        <Typography variant='h2' style={{fontWeight: '600', color: '#3D325F'}}>
                        to Enhance the Educational Journey 
                        </Typography>
                    </div>                    
                </div>
            </div>
        </section>
        </div>
    );
}
