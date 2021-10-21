import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home">
                <div className="general">
                    <h2>WELCOME TO GENERAL HOSPITAL</h2>
                    <hr />
                    <h1 className="title">THE HOSPITAL THAT YOU CAN TRUST</h1>
                    <h4 className="mt-3 title2">Categorized for your convenience, here is a list of the top.</h4>
                
                    <p className="text">As vast as the field of healthcare and medicine is, the internet contains a wide array of interesting medical and health blogs that range from personal to informative. There’s always a blog for every preference, whether for a struggling medical student, a thriving healthcare professional or a curious health enthusiast.</p>
                    <div className="btn btn-info">Abut Us</div>
                </div>
                
            </div>
            <div className="container">
                <div>
                    <h1 className="pa text-center pt-5">PATIENTS <span className="span">SAY ABOUT US</span></h1>
                    <hr />
                    <h4 className="p-4">Starting as a blog that discusses obesity and weight loss, The Doctor Weighs In has expanded to be a valuable resource on all things healthcare—</h4>
                </div>
                <div className="d-flex">
                    <div className="col-md-6 col-sm-12">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src="https://inmedical.sdemo.site/wp-content/uploads/2017/02/doctors_medic_7-1-150x150.jpg" class="p-4 image" alt="..." />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Dr.Anna Carter</h5>
                                    <p class="card-text">covering medicine, psychology, neurobiology, exercise, fitness and health tech. The Doctor Weighs In aims to lead in terms of providing reliable, high quality content to anyone who seeks cutting-edge information about health and innovation..</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src="https://inmedical.sdemo.site/wp-content/uploads/2017/01/inmedical_doctor_1-1-150x150.jpg" class="p-4 image" alt="..." />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Dr.Julia Braun</h5>
                                    <p class="card-text">Better Health prides itself on providing “smart health commentary.” With the site’s wide array of informative articles, videos, and audio files about healthcare services, Better Health is a useful tool to guide both patients and medical professionals in the field. .</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;