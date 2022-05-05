import ImagicationNavbar from '../components/navbar/ImagicationNavbar'
import Header from 'components/ourstory/Header';
import Footer from '../components/footers/Footer'


export default function ForSchools() {
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
