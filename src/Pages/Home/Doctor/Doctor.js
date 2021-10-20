import React from 'react';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const {name, img, hospital} = doctor;
    return (
        <div className="col-lg-3">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{hospital}</p>
                    <button className="btn btn-info">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;