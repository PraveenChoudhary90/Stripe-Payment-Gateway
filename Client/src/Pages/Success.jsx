import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card className="text-center">
                        <Card.Header as="h5">Payment Successful</Card.Header>
                        <Card.Body>
                            <FaCheckCircle size={100} color="green" />
                            <Card.Title>Payment successful, thank you for your purchase.</Card.Title>
                            <Card.Text>
                                Your order will be shipped within 3-5 business days.
                            </Card.Text>
                            <Button variant="primary" href="/">Go back to home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Success;
