import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container p-5">
            <div className="row">
                
            <h1>Choose the best for your health!</h1>
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row g-0 m-3">
                            <div className="col-md-4">
                            <img src="https://inmedical.sdemo.site/wp-content/uploads/2017/02/item-infor-1-style-5-1.jpg" className="image" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Advanced diagnostic method</h5>
                                <hr />
                                <p className="card-text">The ability to be able to look inside our bodies in superb clarity has had a major impact upon authored by medical professionals, health advocates and patient bloggers....</p>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 m-3">
                            <div className="col-md-4">
                            <img src="https://inmedical.sdemo.site/wp-content/uploads/2016/12/item-infor-2-style-5-1.jpg" className="image" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Retirement care institution</h5>
                                <hr />
                                <p className="card-text">Residential care refers to long-term care given authored by medical professionals, health advocates and patient bloggers to adults or children who stay in a residential....</p>
                            </div>
                            </div>
                        </div>
                        <div className="row g-0 m-3">
                            <div className="col-md-4">
                            <img src="https://inmedical.sdemo.site/wp-content/uploads/2016/12/item-infor-3-style-5-1.jpg" className="image" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pediatric and family center</h5>
                                <hr />
                                <p className="card-text">The average wait time to see a doctor at our hospital authored by medical professionals, health advocates and patient bloggers. as provided by patient reviews is 5 minutes..</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about">
                        <div>
                            <h2>OPENING HOURS</h2>
                        </div>
                        <hr />
                        <div>
                            <h3>Monday-Friday</h3>
                            <h3>08:00 - 20:0</h3>
                            <hr />
                            <h3>Saturday</h3>
                            <h3>09:00 - 17:00</h3>
                            <hr />
                            <h3>Sunday</h3>
                            <h3>08:00 - 16:00</h3>
                        </div>
                        <hr />
                        <div>
                            <h3>Emergency Line</h3>
                            <h2 className="line">1-800-643-4300</h2>
                        </div>
                        <div>
                            <p>Nam et velit maximus, malesuada sem eu, auctor purus. Mauris ornare ac urna vitae auctor.The Natural Doctor cover informational topics from Dr. Nyjon Eccles, one of the leading Integrated Medicine Physicians in the UK. The Natural Doctor aims to help potential or existing patients achieve optimal healthThe blog brings the latest in women’s and men’s health articles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;