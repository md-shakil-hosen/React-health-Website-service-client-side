import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [ServiceDetails, setServiceDetails] = useState([])
    const history = useHistory();
    const { serviceID } = useParams();


    useEffect(() => {
        fetch('/DetailsData.json')
            .then(res => res.json())
            .then(data => {
                const findItem = data.find(ServiceDetails => ServiceDetails.id == serviceID);
                if (findItem) {
                    setServiceDetails(findItem);
                }
            });
    }, []);
    return (
        <div>
            <h2 className='study-head text-center'>Our Service</h2>
            <br />
            <Container>
                <Row>
                    <Col sm={4}>
                        <img className='mb-3' src={ServiceDetails?.img} alt="" width='300px' />
                    </Col>
                    <Col className='details-section' sm={8}>
                        <h2>{ServiceDetails?.name}</h2>
                        <h6>{ServiceDetails?.description}</h6>
                        <br />
                        <button className='hero-btn2 mb-3 me-3 mb-lg-0'>GET AN APPOINTMENT!</button>
                        <button href='/home' className='hero-btn2  mb-3 mb-lg-0'>Back Home</button>

                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default ServiceDetails;