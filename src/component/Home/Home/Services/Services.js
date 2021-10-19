import React, { useEffect, useState } from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className='Services-header'>
                <h5 className='mt-5'>OUR SERVICES</h5>
                <h2>Special High-quality Services</h2>
            </div>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 pb-5">
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </>
    );

};

export default Services;