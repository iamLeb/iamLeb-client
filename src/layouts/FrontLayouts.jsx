import { Outlet } from 'react-router-dom';
import Header from '../components/frontComponents/Header.jsx';
import Footer from '../components/frontComponents/Footer.jsx';

const FrontLayouts = () => {

    return (
        <div className={'h-screen bg-gradient-to-r from-primary to-primary-dark'}>
            <Header />
                {/* This div should wrap the content where you want the blur effect */}
            <div className={'pt-16 py-14'}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default FrontLayouts;
