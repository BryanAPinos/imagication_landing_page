import Image from '@material-tailwind/react/Image';
import { Typography } from '@mui/material'
import StevensCampus from 'assets/img/StevensCampus.jpg'

export default function Header() {
    return (
        <div className="relative flex content-center items-center justify-center h-full">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-9xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-6/12 px-4 mx-auto">
                        <Typography variant='h1'>
                            Let's build your campus together
                        </Typography>
                        <Typography variant='subtitle1'>
                            Bring the magic to your campus
                        </Typography>
                    </div>                    
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Image
                            style={{ borderRadius:'50px', boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.50)'}}
                            alt="Explore Image" 
                            raised={false}
                            src={StevensCampus} 
                        />
                    </div>
                </div>
            </div>
        </section>
        </div>
        // <div className="pt-20 relative flex content-center items-center justify-center h-screen">
        // <section className="pb-20 bg-white-100 -mt-8">
        //     <div className="container max-w-7xl mx-auto px-2">
        //         <div className="flex flex-wrap items-center mt-16">
        //         <div className="w-full md:w-7/12 px-4 mx-auto">
        //                 <Typography variant='h1'>
        //                     Bring the magic to your campus
        //                 </Typography>
        //                 <Typography variant='subtitle1'>
        //                     Let's build your campus together
        //                 </Typography>
        //             </div> 
                                    
        //             <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
        //             <Image
        //                 src={StevensCampus}
        //                 rounded={true}
        //                 raised={false}
        //                 alt="Stevens Campus"
        //              />
        //             </div>
        //         </div>
        //         <EmailForm/>  
        //     </div>
        // </section>
        // </div>
    );
}
