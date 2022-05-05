import Image from '@material-tailwind/react/Image';
import { Typography, Button } from '@mui/material'

export default function Header() {
    return (
        <div className="relative flex content-center items-center justify-center h-screen">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <Typography>Let's build your campus together.</Typography>
                        <Typography>
                        Transform your campus tours and invite students from all over the world!
                        </Typography>
                        <Button>
                            Contact Us
                        </Button>
                    </div>                  
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                    <Image
                        src='../../assets/img/teamwork.png'
                        rounded={true}
                        raised={false}
                        alt="Rounded Image"
                     />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
