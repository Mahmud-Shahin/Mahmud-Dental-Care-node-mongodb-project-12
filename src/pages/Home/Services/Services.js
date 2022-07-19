import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://secret-reef-44211.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (


        <div id='services' className='container' >
            <h2 className='text-center'>Our Services</h2>

            <div className='row row-cols-lg-3 g-4'>


                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;