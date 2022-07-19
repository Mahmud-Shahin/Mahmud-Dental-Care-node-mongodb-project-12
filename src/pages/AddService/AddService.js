import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        const url = `https://secret-reef-44211.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };

    return (
        <div className='w-50 mx-auto'>
            <h1>please add a service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <input type="submit" value="Add service" />
            </form>
        </div>
    );
};

export default AddService;