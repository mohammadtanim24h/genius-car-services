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
                const { data } = await axiosPrivate.get(`http://localhost:5000/order?email=${email}`);
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
        <div className="text-center">
            <h2>Your Orders {orders.length}</h2>
        </div>
    );
};

export default Order;
