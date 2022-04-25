import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    
    
    // const [user, setUser] = useState({
    //     name: 'Akbar the Great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmahal Road, Mohammadpur',
    //     phone: '01894322343'
    // })
    // const handleAddressChange = (e) => {
    //     console.log(e.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = e.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);

        // console.log(address, rest);
    // }

    const handleBooking = (e) => {
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
        .then(res => {
            const { data } = res;
            if(data.insertedId) {
                toast('Confirmed Booking Successfully!')
                e.target.reset();
            }
        })
    }
    return (
        <div className="w-50 mx-auto">
            <h2 className="text-primary my-4 text-center">
                Book: {service.name}
            </h2>
            <form onSubmit={handleBooking} className="text-center">
                <input className="form-control mb-2 w-100 mx-auto" defaultValue={user?.displayName} type="text" name="name" placeholder="Name" required readOnly/>
                <input className="form-control mb-2 w-100 mx-auto" defaultValue={user?.email} type="email" name="email" placeholder="Email" required readOnly/>
                <input className="form-control mb-2 w-100 mx-auto" defaultValue={service?.name} type="text" name="service" placeholder="Service" required readOnly/>
                <input className="form-control mb-2 w-100 mx-auto" type="text" name="address" placeholder="Address" required />
                <input className="form-control mb-2 w-100 mx-auto" type="number" name="phone" placeholder="Phone" required />
                <input type="submit" className="btn btn-primary" value="Confirm Booking" />
            </form>
        </div>
    );
};

export default Checkout;
