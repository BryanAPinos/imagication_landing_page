import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function IntroSection() {
    return (
        <div className="relative flex content-center items-center justify-center h-screen">
        <section className="pb-20 bg-white-100 -mt-8">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="flex flex-wrap items-center mt-16">
                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <CardImage alt="Card Image" src={Teamwork} />
                    </div>
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <H4 color="gray">Introducing Imagication</H4>
                        <LeadText color="blueGray">
                        Immerse yourself in a new reality where you can explore different college campuses. Only Imagication will allow you to talk to virtual tour guides and meet other prospective students. 
                        </LeadText>
                    </div>


                </div>
            </div>
        </section>
        </div>
    );
}
