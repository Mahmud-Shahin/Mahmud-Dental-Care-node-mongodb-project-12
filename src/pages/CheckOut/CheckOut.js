import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from './../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';


// import { useState } from 'react';


const CheckOut = () => {
    const{serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

   




    // const [user, setUser]= useState({
    //     name: 'shahin mahmud',
    //     email: 'shahinmahmud184@gmial.com',
    //     address: 'Ulon road, Rampura',
    //     phone: '01643820208'
        
        
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value)
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     console.log(newUser);
    //     setUser(newUser);

        
                                                                                                                                                                                                                                                                                                                                        
    // }

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
        email: user.email,
        service: service.name,
        serviceId: serviceId,
        address: event.target.address.value,
        phone: event.target.phone.value
    }

    axios.post('https://secret-reef-44211.herokuapp.com/order', order)
    .then(response => {
      const {data} = response;
      if(data.insertedId){
          toast('your order is confirmed!!!')
          event.target.reset();
      }
    })

  }
    
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form action="" onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name='name' value={user?.displayName} placeholder='name' readOnly disabled required/>
                <br />
                <input className='w-100 mb-2' type="email" name='email' value={user?.email} placeholder='email' readOnly disabled required/>
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' readOnly required/>
                <br />
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address' autoComplete='off' required/>
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone'  required/>
                <br />
                <input className='btn btn-primary' type="submit" value="place holder" />
            </form>

        </div>
    );
};

export default CheckOut;