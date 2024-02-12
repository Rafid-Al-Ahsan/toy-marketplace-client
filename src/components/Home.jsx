import React, { useContext } from 'react';
import { AuthContext } from '../routes/AuthProvider';
import About from './About';
import Banner from './Banner';
import Category from './Category';
import Gallery from './Gallery';
import Membership from './Membership';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Category></Category>
            <Membership></Membership>
        </div>
    );
};

export default Home;