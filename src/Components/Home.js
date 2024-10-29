import React from 'react'
import Header from './Header';
import MainContent from './MainComponent';
import Footer from './Footer';

const Home = () => {
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