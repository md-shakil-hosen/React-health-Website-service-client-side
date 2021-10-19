import React from 'react';
import Banner from './Banner/Banner';
import Section1 from './Section/Section1/Section1';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Section1></Section1>
        </div>
    );
};

export default Home;