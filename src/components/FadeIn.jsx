import { motion as Motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
};

export default FadeIn;
