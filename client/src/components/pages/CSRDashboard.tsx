// src/pages/CSRDashboard.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHandsHelping, FaStore, FaHandshake } from 'react-icons/fa';

const CSRDashboard: React.FC = () => {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/csr-events');
    };

    return (
        <div className="py-5 text-center" style={{ background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)' }}>
            <Container>
                {/* Hero Section */}
                <Row className="justify-content-center mb-5">
                    <Col md={10} lg={8}>
                        <h1 className="display-4 fw-bold text-primary">CSR Connect</h1>
                        <p className="lead fw-semibold text-dark mt-3">Empowering Rural Entrepreneurs</p>
                        <p className="text-muted mt-3">
                            Connecting NGOs, rural women entrepreneurs, and corporations to create impactful CSR initiatives.
                        </p>
                        <div className="mt-4">
                            <Button onClick={handleGetStarted} variant="primary" size="lg">
                                Get Started
                            </Button>
                        </div>
                    </Col>
                </Row>

                {/* How It Works */}
                <section className="py-5">
                    <h2 className="fw-bold">How It Works</h2>
                    <p className="text-muted mb-5">Three simple steps to create impactful partnerships</p>
                    <Row className="g-4">
                        <Col md={4}>
                            <FaHandsHelping size={40} className="mb-3 text-primary" />
                            <h5 className="fw-bold">NGOs Create Events</h5>
                            <p className="text-muted">NGOs organize CSR initiatives and showcase participating rural businesses</p>
                        </Col>
                        <Col md={4}>
                            <FaStore size={40} className="mb-3 text-success" />
                            <h5 className="fw-bold">Businesses Join</h5>
                            <p className="text-muted">Rural women entrepreneurs showcase their products and services</p>
                        </Col>
                        <Col md={4}>
                            <FaHandshake size={40} className="mb-3 text-warning" />
                            <h5 className="fw-bold">Corporates Connect</h5>
                            <p className="text-muted">Corporations discover and partner with promising rural businesses</p>
                        </Col>
                    </Row>
                </section>

                {/* Our Impact */}
                <section className="py-5">
                    <Container className="px-4 py-5 rounded shadow-sm bg-white">
                        <h2 className="fw-bold">Our Impact</h2>
                        <p className="text-muted mb-4">Making a difference in rural communities</p>
                        <Row className="g-4">
                            <Col md={3}>
                                <h4 className="text-primary fw-bold">500+</h4>
                                <p className="text-muted">Women Entrepreneurs</p>
                            </Col>
                            <Col md={3}>
                                <h4 className="text-success fw-bold">100+</h4>
                                <p className="text-muted">CSR Events</p>
                            </Col>
                            <Col md={3}>
                                <h4 className="text-info fw-bold">50+</h4>
                                <p className="text-muted">Corporate Partners</p>
                            </Col>
                            <Col md={3}>
                                <h4 className="text-danger fw-bold">₹2Cr+</h4>
                                <p className="text-muted">Business Value Created</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Container>
        </div>
    );
};

export default CSRDashboard;
