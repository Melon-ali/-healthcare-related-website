import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/fake.json")
        .then(res=> res.json())
        .then(data => setServices(data));
    }, [])

    const {serviceId: id} = useParams();
    const exact = services.filter((item) => item.id == id);
    console.log(exact);
    
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <img src={exact.img} alt="" style={{ width: "100%"}} />
            </div>
            {exact.name}
        </div>
    );
};

export default Details;