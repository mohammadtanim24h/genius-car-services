import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const email = user?.email;
    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await axiosPrivate.get(`https://tranquil-tor-90442.herokuapp.com/order?email=${email}`);
                setOrders(data);
            }
            catch(error) {
                console.error(error.message);
                if(error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        };
        getOrders()
    }, [email]);
    console.log(orders);
    return (
        <div className="text-center w-75 mx-auto">
            <h2 className="text-secondary">Your Orders {orders.length}</h2>
            {
                orders.map(order => <div className="m-3 p-3 shadow rounded" key={order._id}>
                    <h4 className="text-secondary">{order.service}</h4>
                    <p className="lead">Address: {order.address}</p>
                </div> )
            }
        </div>
    );
};

export default Order;
