import { FC } from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, BrightTech",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "This team exceeded our expectations. Their work is fast, reliable, and top-notch quality.",
  },
  {
    name: "Michael Smith",
    role: "Founder, StartHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Amazing experience! They transformed our ideas into a beautiful and functional product.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Head, CreativeCo",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Highly recommend them! Professional approach and great communication throughout.",
  },
  {
    name: "David Wilson",
    role: "Product Manager, NextGen",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "Fantastic work! They delivered on time and the quality is beyond expectations.",
  },
];

const Testimonials: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Title */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What our clients say about us
        </motion.h2>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 mx-2 text-center">
                <Card.Img
                  variant="top"
                  src={client.image}
                  alt={client.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Text className="text-muted fst-italic">
                    "{client.feedback}"
                  </Card.Text>
                  <h6 className="fw-bold mt-3">{client.name}</h6>
                  <p className="small text-secondary">{client.role}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
