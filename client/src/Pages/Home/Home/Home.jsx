import React, { useContext } from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Reviews from '../Reviews/Reviews';
import { AuthContext } from '../../../context/AuthProvider';

const Home = () => {
    const {user}=useContext(AuthContext)
    console.log(user,"from Home")
    return (
        <>
        <TopBanner/>
        <Reviews/>
        </>
    );
};

export default Home;