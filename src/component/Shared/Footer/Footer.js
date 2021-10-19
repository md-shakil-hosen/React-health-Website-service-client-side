import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="bg-custom text-light text-start pt-5 cusFooter">
                <Container>
                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <h3 className="about">About Delmont</h3>
                            <h6 className='footer-p'>Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.
                                We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</h6>
                            <div>
                                <a href="/"><i class="fab fa-facebook-square fs-3 ms-2"></i></a>
                                <a href="/"><i class="fab fa-twitter-square fs-3 ms-2"></i></a>
                                <a href="/"><i class="fab fa-google-plus-square fs-3 ms-2"></i></a>
                                <a href="/"><i class="fab fa-linkedin fs-3 ms-2"></i></a>
                            </div>
                        </Col>
                        <Col>
                            <h3 className="footer-title">Quick Links</h3>
                            <ul className=" quick-link d-block p-0 m-0">
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Make Appointments</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Customer Treatments</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Our Doctors Team</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Departments Services</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">About our Clinic</a>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h3 className="footer-title">Latest News</h3>
                            <ul className=" quick-link d-block p-0 m-0">
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">How much aspirin to take for stroke</a></li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Implant Surgical equipment technology</a></li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">The Benefits of Middle-Age Fitness</a>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h3 className="footer-title">Our Services</h3>
                            <ul className=" quick-link d-block p-0 m-0">
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Surgery</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Cardiology</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Pediatric</a>
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Anesthesiology</a></li>
                                <li>
                                    <i class="fas fa-arrow-right me-2"></i>
                                    <a href="/">Orthopedics</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr className="fw-5" />
                <p className="p-0 m-0 text-center">Alright reserved by Shakil Mahmud</p>
            </div>
        </div>
    );
};

export default Footer;