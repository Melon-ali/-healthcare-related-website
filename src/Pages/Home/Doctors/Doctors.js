import React from 'react';
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        img: 'https://i.ibb.co/dfvqpc3/Covid-19-coronavirus-outbreak-healthcare-workers-and-pandemic-concept-Enthusiastic-smiling-male-doct.jpg',
        name: 'Kelly M. Haggerty',
        hospital: 'Maternity Hospital'
    },
    {
        img: 'https://i.ibb.co/yRvcPWv/Covid-19-pandemic-virus-outbreak-clinic-and-healthcare-workers-concept-Supportive-doctor-in-personal.jpg',
        name: 'Alberta R. Tarango',
        hospital: 'Medic Theme Hospital'
    },
    {
        img: 'https://i.ibb.co/drzFyDK/Covid-19-preventing-virus-healthcare-workers-and-vaccination-concept-Confident-doctor-working-with-c.jpg',
        name: 'Dr David Sunders',
        hospital: 'Maternity Hospital'
    },
    {
        img: 'https://i.ibb.co/h1VyFf4/Healthcare-workers-medicine-covid-19-and-pandemic-self-quarantine-concept-Cheerful-smiling-hispanic.jpg',
        name: 'Daniel Armen',
        hospital: 'Maternity Hospital'
    },
    {
        img: 'https://i.ibb.co/dt8zBW2/Medical-workers-covid-19-and-vaccination-concept-Confident-professional-doctor-female-nurse-in-blue.jpg',
        name: 'Dr Julia Braun',
        hospital: 'Maternity Hospital'
    },
]

const Doctors = () => {
    return (
        <div className="container">
            <h2 className="text-info">Doctors everyday</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;