import { FC } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-light pt-5 pb-3"
      style={{
        background: "var(--bs-primary) ",
      }}
    >
      <Container>
        <Row className="mb-5 g-4">
          {/* Brand */}
          <Col md={3} className="text-center text-md-start">
            <h3 className="fw-bold">MyApp</h3>
            <p className="text-light-50">
              We build modern, responsive, and beautiful web solutions that help your business grow.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <motion.a
                  href="/"
                  className="text-light text-decoration-none"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a href="/about" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  About
                </motion.a>
              </li>
              <li>
                <motion.a href="/features" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  Features
                </motion.a>
              </li>
              <li>
                <motion.a href="/pricing" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  Pricing
                </motion.a>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>
                <motion.a href="/web" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  Web Development
                </motion.a>
              </li>
              <li>
                <motion.a href="/mobile" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  Mobile Apps
                </motion.a>
              </li>
              <li>
                <motion.a href="/design" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  UI/UX Design
                </motion.a>
              </li>
              <li>
                <motion.a href="/marketing" className="text-light text-decoration-none" whileHover={{ x: 5 }}>
                  Digital Marketing
                </motion.a>
              </li>
            </ul>
          </Col>

          {/* Newsletter + Social */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Subscribe to Newsletter</h5>
            <Form className="d-flex mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="rounded-start-pill border-0"
              />
              <Button
                type="submit"
                className="rounded-end-pill"
                style={{
                  background: "#fff",
                  color: "#ff6b6b",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Subscribe
              </Button>
            </Form>

            <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-light fs-5"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-light fs-5"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-light fs-5"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-light fs-5"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </Col>
        </Row>

        <hr className="border-light opacity-25" />

        <Row>
          <Col className="text-center text-light small">
            &copy; {new Date().getFullYear()} MyApp. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
