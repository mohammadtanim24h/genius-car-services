import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Service: {serviceId}</h2>
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
