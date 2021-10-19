import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h2 className='contact-us'>Contact Us</h2>
            <Container>
                <Row>
                    <Col sm={6} md={6}>
                        <img className='contact-img img-fluid' src="http://themetechmount.com/html/delmont/images/single-img-twel.jpg" alt="" width='400px' />
                    </Col>
                    <Col className="form mb-3 mt-4" sm={6} md={6} >
                        <>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <br />
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                            <br />
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </>
                        <br />
                        <>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                                <br />
                                <Button className='mb-3 submit-btn' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </FloatingLabel>
                        </>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;