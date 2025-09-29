"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Alert, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import GradientButton from "./Button";

export default function SendInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry sent:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // hide after 4s
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center fw-bold mb-4">Send Inquiry</h2>

              <Card className="shadow-lg border-0">
                <Card.Body>
                  {submitted && (
                    <Alert variant="success" className="text-center">
                      ✅ Your inquiry has been sent successfully!
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="formMessage" className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <GradientButton>
                          Send Inquiry
                        </GradientButton>
                      </motion.div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
