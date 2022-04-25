import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [serviceId]);
    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className="text-center my-4">
                <Link to="/checkout">
                    <button className="btn btn-outline-primary">
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
