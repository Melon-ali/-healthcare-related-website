import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div className="">
            <div class="card service">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text px-2">{description}</p>
                    <button className="btn btn-info">Read More</button>
                </div>
            </div>
        </div>
  
    );
};

export default Service;