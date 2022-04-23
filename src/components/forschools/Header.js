import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import StevensCampus from 'assets/img/stevens-campus.jpg'

export default function Header() {
    return (
        <div className="relative flex content-center items-center justify-center h-screen">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <H4 color="gray">Let’s build your campus together</H4>
                        <LeadText color="blueGray">
                        Transform your campus tours and invite students from all over the world
                        </LeadText>
                        <Button color='purple'>
                            Contact Us
                        </Button>
                    </div>                  
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                    <Image
                        src={StevensCampus}
                        rounded={true}
                        raised={false}
                        alt="Stevens Campus"
                     />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
