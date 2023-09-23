import React from 'react';
import Header from './Header';
import About from './About';
import Artical from './Artical';
import Footer from './Footer';

const Homelayout = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Artical></Artical>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;