import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import ControlSection from 'components/landing/ControlSection';
import IntroSection from 'components/landing/IntroSection';
import ExploreSection from 'components/landing/ExploreSection';
import CardSection from 'components/landing/CardSection';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <ExploreSection />
                <hr className="my-6 border-black-300" />
                <IntroSection />
                <hr className="my-6 border-black-300" />
                <ControlSection />
                <hr className="my-6 border-black-300" />
                <CardSection />
            </main>
            <DefaultFooter />
        </>
    );
}
