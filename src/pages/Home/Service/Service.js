import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Service.css'


const Service = ({ service }) => {


    const { _id, img, name, price, description } = service;
    const navigate = useNavigate()
    const navigateServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div>


            <div className="card-group mt-5">
                <div className="card g-5 h-100 col-sm-12 col-md-6 col-lg-4 ">
                    <img src={img} alt="" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{name}</h5>
                        <h3>Price:$ {price}</h3>
                        <p className="card-text">{description}</p>
                        <div>
                            <button onClick={() => navigateServiceDetails(_id)} class="btn btn-primary mx-auto" type="button">Button</button>
                        </div>
                    </div>
                </div >

            </div >





        </div >
    );
};

export default Service;