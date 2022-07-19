import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import PageTitle from '../../Shared/PageTitle/PageTitle'

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>

            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;