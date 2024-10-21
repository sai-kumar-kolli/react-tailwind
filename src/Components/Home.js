import React from 'react'
import Header from './Header';
import MainContent from './MainComponent';
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {

    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="page-layout">
                Loading ...
            </div>
        );
    }
    return (
        <>
            <Header />
            <MainContent />
            {/* <Footer /> */}
        </>
    )
}
export default Home;