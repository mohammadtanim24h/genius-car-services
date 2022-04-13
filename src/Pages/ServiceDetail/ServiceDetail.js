import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    return (
        <div>
            <h2>This is Service: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;
