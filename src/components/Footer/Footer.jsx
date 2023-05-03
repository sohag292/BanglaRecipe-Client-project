import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
    return (
            <footer className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h1 className='mb-5'>Bangla<span className='text-success'>R</span>ecipe</h1>
                            <h4>Explore More Recipes</h4>
                            <p>Discover thousands of delicious recipes from our chefs.</p>
                        </Col>
                        <Col md={2}>
                            <h4>Service</h4>
                            <ul className="list-unstyled" >
                                <li>Compare</li>
                                <li>Download</li>
                                <li>Feedback</li>
                                <li>Cookies policy</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h4>Activity</h4>
                            <ul className="list-unstyled" >
                                <li>Influencer</li>
                                <li>Need Help</li>
                                <li>content guide</li>
                                <li>privacy</li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <div>
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li>1234 Main Street</li>
                                    <li>Anytown, Dhaka 1234</li>
                                    <li>email@example.com</li>
                                </ul>
                            </div>
                            <div class="d-flex justify-content-center">
                                <ul class="list-inline m-0">
                                    <li class="list-inline-item me-3 fs-5"><FaFacebook /></li>
                                    <li class="list-inline-item me-3 fs-5"><FaTwitter /></li>
                                    <li class="list-inline-item me-3 fs-5"><FaInstagram /></li>
                                    <li class="list-inline-item me-3 fs-5"><FaYoutube /></li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <p className="mt-3 mb-0">© 2023 Recipe Website. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}
