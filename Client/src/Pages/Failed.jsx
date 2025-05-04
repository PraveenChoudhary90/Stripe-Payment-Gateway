import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa';

const Failed = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card className="text-center">
                        <Card.Header as="h5">Payment Failed</Card.Header>
                        <Card.Body>
                            <FaTimesCircle size={100} color="red" />
                            <Card.Title>Payment failed, please try again.</Card.Title>
                            <Card.Text>
                                If you have any issues, please contact us at <a href="mailto:support@example.com">support@example.com</a>
                            </Card.Text>
                            <Button variant="primary" href="/">Go back to home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Failed;
