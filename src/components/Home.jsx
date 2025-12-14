import React from 'react'
import Header from './Header.jsx';
import MainContent from './MainComponent.jsx';
import Footer from './Footer.jsx';

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