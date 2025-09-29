import { FC } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { motion } from "framer-motion";
import GradientButton from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const CustomNavbar: FC = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ zIndex: 999 }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        style={{
          background: "var(--bs-primary)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
        variant="dark"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="fw-bold fs-4">
            MyApp
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 shadow-none p-0"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Center Menu */}
            <Nav className="mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="position-relative mx-2"
                >
                  <Nav.Link
                    href={link.href}
                    className="text-white fw-medium"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      transition: "color 0.3s",
                    }}
                  >
                    {link.label}
                    <motion.span
                      layoutId="underline"
                      className="position-absolute start-0 bottom-0 w-0 h-1 bg-warning"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ borderRadius: "2px" }}
                    />
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>

            {/* Right Side Contact Button */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <GradientButton href="/contact" className="px-4 py-2">
                Contact Us
              </GradientButton>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default CustomNavbar;
