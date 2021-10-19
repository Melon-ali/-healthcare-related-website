import React from 'react';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const {name, img, hospital} = doctor;
    return (
        <div className="col-lg-3">
            <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{hospital}</p>
                    <button className="btn btn-info">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;