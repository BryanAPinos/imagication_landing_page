import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import ControlSection from 'components/landing/ControlSection';
import IntroSection from 'components/landing/IntroSection';
import ContactSection from 'components/landing/ContactSection';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <IntroSection />
                <ControlSection />
            </main>
            <DefaultFooter />
        </>
    );
}
