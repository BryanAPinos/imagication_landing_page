import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Image from '@material-tailwind/react/Image'
import Logo from 'assets/img/logo.png'

export default function DefaultFooter() {
    return (
        <>
            <footer 
                className="bg-relative pt-8 pb-6"
            >
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <Image 
                                src={Logo}
                                raised={false}
                                alt='Imagication Logo'
                            />
                            <H5 color="gray">Imagication</H5>
                            <div className="-mt-4">
                                <LeadText color="blueGray">
                                    Providing the guidance counselor you deserve.   
                                </LeadText>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="w-full lg:w-6/12 px-4">
                                <H5 color="gray">Contact</H5>
                                <div className="-mt-4">
                                    <LeadText color="blueGray">
                                        Email: info@imagication.co 
                                    </LeadText>
                                </div>
                                {/* <div className="-mt-4">
                                    <LeadText color="blueGray">
                                        +1 201-663-5412 
                                    </LeadText>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                    </div>
                </div>
            </footer>
        </>
    );
}
