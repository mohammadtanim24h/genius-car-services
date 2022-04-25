import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>You are about to book: {service?.name}</h2>
            <div className="text-center my-4">
                <Link to={`/checkout/${serviceId}`}>
                    <button className="btn btn-outline-primary">
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
