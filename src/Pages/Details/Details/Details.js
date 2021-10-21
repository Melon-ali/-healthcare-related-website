import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('/fake.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    }, [])

    
    const details = services?.find(detail => detail.id === id)
    // const exact = services.filter((item) => item.id == id);
    console.log(details);
    return (
        <div className="container">
            <div className="row p-5 color">
                <div className="col-lg-6 col-12">
                    <img src={details?.img} alt="" style={{ width: "100%"}} />
                </div>
                <div className="col-lg-6 col-12">
                    <h1> <span className="text-info">General </span> <span className="text">Hospital</span></h1>
                    <h2 className="py-3">Service Name: {details?.name}</h2>
                    <h5>{details?.description}</h5>
                </div>
            </div>
        </div>
    );
};

export default Details;