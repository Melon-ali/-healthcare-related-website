import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="service-container">
            {
                services.map(service => <Service
                    service = {service}
                ></Service>)
            }
        </div>
    );
};

export default Services;