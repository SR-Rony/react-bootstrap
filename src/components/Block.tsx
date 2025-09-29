import { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaUsers, FaMobileAlt } from "react-icons/fa";

const blocks = [
  {
    icon: <FaRocket size={40} color="#ff6b6b" />,
    title: "Fast Performance",
    description: "Our solutions are optimized for speed and efficiency across all devices.",
  },
  {
    icon: <FaShieldAlt size={40} color="#ff6b6b" />,
    title: "Secure",
    description: "Security is our top priority. Protecting your data is built-in by default.",
  },
  {
    icon: <FaUsers size={40} color="#ff6b6b" />,
    title: "User Friendly",
    description: "Designed with usability in mind for a seamless user experience.",
  },
  {
    icon: <FaMobileAlt size={40} color="#ff6b6b" />,
    title: "Responsive Design",
    description: "Looks perfect on any device — desktop, tablet, or mobile.",
  },
];

const Block: FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Features
        </motion.h2>

        <Row className="g-4">
          {blocks.map((block, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-100 text-center border-0 shadow-sm rounded-4 p-4 hover-shadow">
                  <div className="mb-3">{block.icon}</div>
                  <Card.Title className="fw-bold">{block.title}</Card.Title>
                  <Card.Text className="text-muted">{block.description}</Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Block;
