import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
// import img from '../../../../image/slide-img-04.png'
import tagImg from '../../../../image/slider-icon001.png'
const Banner = () => {
    return (
        <div>
            <Container className='banner-img' fluid>
                <Container>
                    <Row>
                        <Col xs={12} md={6} >
                            <div className='mt-5 pt-5'>
                                <span><img src={tagImg} alt="" />   WE GIVE YOU THE BEST!</span>
                                <h1 className='display-3 fw-bolder'>We Provide Medical Services That You Can Trust</h1>
                                <p className='mt-3'>I realized that becoming a doctor, I can only help a small community. But by <br /> becoming a doctor, I can help my whole country.  </p>

                                <div className='mt-5'>
                                    <button className='hero-btn1 mb-3 mb-lg-0'>GET AN APPOINTMENT!</button>
                                    <button className='hero-btn ms-0 ms-lg-3'>SEE HOW CAN HELP</button>
                                </div>
                            </div>
                        </Col>

                        <Col className='mt-5' xs={12} md={6}>
                            {/* <img src={img} alt="" /> */}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Banner;