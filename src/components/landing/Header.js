import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Explore without Limitations.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            Explore the endless possibilities in the comfort of your own home.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
