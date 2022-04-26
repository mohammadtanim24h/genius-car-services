import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://tranquil-tor-90442.herokuapp.com/service`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
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
            <h2 className='text-primary display-6 text-center'>Add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='my-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='my-2' {...register("description")} />
                <input placeholder='Price' className='my-2' type="number" {...register("price")} />
                <input placeholder='Photo URL' className='my-2' {...register("img")} />
                <input className='my-2 w-50 mx-auto' type="submit" value={"Add Service"} />
            </form>
        </div>
    );
};

export default AddService;