
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Section1.css'

const Section1 = () => {
    return (
        <div>
            {/* Section One  */}
            <h2 className='mb-5'>Doctors Gallery</h2>
            <Container className='mb-5'>
                <Row xs={1} md={3} lg={4} className="g-4">
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/02.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/03.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/04.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/05.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/06.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/02.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/03.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='doctor-gallery'>
                            <Card.Img variant="top" src="http://themetechmount.com/html/delmont/images/portfolio/02.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />

            {/* Section Two */}
            <div className="section2 mb-5">
                <Container>
                    <Row>
                        <Col>
                            <h3 className='section2-hed mt-5' >Need a Doctor for Check-up?</h3>
                            <h2 className='section2-hed'>Just make an Appointment & You’re Done!</h2>

                            <button className="an-app">
                                GET AN APPOINTMENT
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br />
        </div>
    );
};

export default Section1;