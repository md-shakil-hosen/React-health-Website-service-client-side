import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='about-us'>About Us</h2>
            <Container>
                <Row>
                    <Col id='#about' sm={4}>
                        {/* About Image  */}
                        <img className='img-fluid' src="http://themetechmount.com/html/delmont/images/single-img-four.png" alt="" />
                    </Col>
                    <Col sm={8}>
                        <h5>WHAT WE DO</h5>
                        <h2 className='about-head' >We Have 25 Years Experience</h2>
                        <h6 className='about-head' >We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery</h6>
                        <br />

                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <h5>our Mission</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <h5>Our Stratagies</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="http://themetechmount.com/html/delmont/images/portfolio/post-one-1200x800.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <h5>Our Vision</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="http://themetechmount.com/html/delmont/images/portfolio/post-two-1200x800.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;