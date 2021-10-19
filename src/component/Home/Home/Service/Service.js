import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, description, id } = props.service;
    return (
        <Col id='service'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='card-style'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <NavLink to={`/serviceDetails/${id}`}>
                        <Button className="primary-btn">More Details</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;