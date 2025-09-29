import { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaLaptopCode, FaRocket, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegLightbulb size={40} color="#ff6b6b" />,
    title: "Idea & Planning",
    description: "We brainstorm and plan solutions tailored to your business needs.",
  },
  {
    icon: <FaLaptopCode size={40} color="#ff6b6b" />,
    title: "Development",
    description: "Our team develops scalable, responsive, and modern web solutions.",
  },
  {
    icon: <FaRocket size={40} color="#ff6b6b" />,
    title: "Launch",
    description: "We test, optimize, and launch your product for maximum impact.",
  },
  {
    icon: <FaSmile size={40} color="#ff6b6b" />,
    title: "Support",
    description: "Continuous support and improvements to keep your business growing.",
  },
];

const Work: FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How We Work
        </motion.h2>

        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="d-flex">
              <motion.div
                className="w-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="h-100 border-0 shadow-sm text-center p-4 rounded-4 hover-shadow d-flex flex-column justify-content-between">
                  <div className="mb-3">{step.icon}</div>
                  <Card.Title className="fw-bold">{step.title}</Card.Title>
                  <Card.Text className="text-muted">{step.description}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
