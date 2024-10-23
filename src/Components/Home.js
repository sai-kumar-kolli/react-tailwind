import React from 'react'
import Header from './Header';
import MainContent from './MainComponent';
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from './loader';


const Home = () => {

    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-900">
                <Loader />
            </div>
        );
    }
    return (
        <>
            <div className="bg-gray-300 dark:bg-gray-900 min-h-screen">
                <Header />
                <MainContent />
                {/* <Loader /> */}
                {/* <Footer /> */}
            </div>
        </>
    )
}
export default Home;