// src/components/HeroSection.tsx
import type { FC } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { motion } from "framer-motion";
import GradientButton from "./Button";

const HeroSection: FC = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        minHeight: "70vh",
        background: " var(--bs-primary)", // gradient effect
        color: "#fff",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="fw-bold display-4"
            >
              Welcome to <span style={{ color: "#ffe066" }}>MyApp</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lead mt-3 mb-4"
              style={{ maxWidth: "500px" }}
            >
              Build your business with modern features, responsive design, and smooth animations that delight your users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <GradientButton href="#get-started" className="me-3">
                Get Started
              </GradientButton>
              <GradientButton href="#learn-more" className="bg-white text-primary">
                Learn More
              </GradientButton>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <motion.img
                src="https://images.unsplash.com/photo-1758649863410-2d35a9d36f70?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero Illustration"
                className="img-fluid rounded-4 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
            />
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
