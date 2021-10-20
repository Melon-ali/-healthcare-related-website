import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/NotFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not">
            <img src={notfound} alt="" />
            <div>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;