import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const GradientButton: FC<GradientButtonProps> = ({ children, href, onClick, className }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`d-inline-block text-white text-center fw-bold px-3 py-2 rounded-pill ${className}`}
      style={{
        background: "linear-gradient(90deg, #ff6b6b, #ff9a9e)",
        textDecoration: "none",
      }}
    >
      {children}
    </motion.a>
  );
};

export default GradientButton;
