import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete the service?")
        if(proceed) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className="w-50 mx-auto bg-light shadow p-5 ">
            <h3>Manage Your Services</h3>
            {services.map((service) => (
                <div key={service._id}>
                    <h4>
                        {service.name}
                        <button onClick={() => handleDelete(service._id)} className="btn btn-danger ms-3">X</button>
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default ManageServices;
