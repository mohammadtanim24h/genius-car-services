import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
    { id: 1, name: "Tom Cruise", img: expert1 },
    { id: 2, name: "Leonardo Di Caprio", img: expert2 },
    { id: 3, name: "Brad Pitt", img: expert3 },
    { id: 4, name: "Tom Hanks", img: expert4 },
    { id: 5, name: "John Cena", img: expert5 },
    { id: 6, name: "Shit Smith", img: expert6 },
];

const Experts = () => {
    return (
        <div className="container my-5" id="experts">
            <h2 className="text-primary text-center mt-5">Our Experts</h2>
            <div className="row g-4">
                {
                    experts.map(expert => <Expert expert={expert} key={expert.id}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
