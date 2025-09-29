import type { FC } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with seamless user experience.",
    image: "https://img.freepik.com/free-photo/young-team-coworkers-working-project_273609-16277.jpg",
  },
  {
    title: "Mobile App Design",
    description: "Creative mobile app interface with smooth navigation.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&w=1080&q=80",
  },
  {
    title: "Web Dashboard",
    description: "Interactive dashboard with analytics and real-time updates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1HPTtk0SOdhTJoCcq_3KW8X1O93zrtViJMk0aFntJxBut_IvtyVS4cYEkWhUsZ50I-g&usqp=CAU",
  },
  {
    title: "Marketing Website",
    description: "Responsive marketing website optimized for conversions.",
    image: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ViewProjects: FC = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          View Our Projects
        </motion.h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden ">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center d-flex flex-column justify-content-between">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted">{project.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="rounded-pill mt-2"
                      style={{
                        background: "linear-gradient(90deg, #ff6b6b, #ff9a9e)",
                        border: "none",
                      }}
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ViewProjects;
