import React from 'react'
import './subcribation.css'
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
export default function Subscribtion() {
    return (
        <div className="py-5">
            <div className="position-relative w-75 mx-auto rounded bg-gradient-primary p-5">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto text-center">
                            <h1 className="text-white mb-3">Subscibe Our Food site</h1>
                            <p className="text-white fw-bolder">Subscibe to receive delicious updates from our food site!
                                Join our mailing list for tasty recipes and food inspiration!</p>
                            <Form>
                                <Row>
                                    <Col md={8} className="mb-3 mb-md-0">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Enter your email address"
                                                aria-label="Enter your email address"
                                                aria-describedby="button-addon2"
                                                className="form-control-lg"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="primary" type="submit" className="btn-lg w-100" id="button-addon2">
                                            Subscribe
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
