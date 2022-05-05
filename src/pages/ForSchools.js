import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Footer from '../components/footers/Footer'
import Header from 'components/forschools/Header';

export default function OurStory() {
    return (
        <>
            <div className="absolute w-full z-20">
                <ImagicationNavbar />
            </div>
            <main>
                <Header />
            </main>
            <Footer />
        </>
    );
}
