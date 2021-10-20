import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { id, name, description, img} = service;
    return (
        <div className="">
            <div class="card service">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text px-2">{description}</p>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-info">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
  
    );
};

export default Service;