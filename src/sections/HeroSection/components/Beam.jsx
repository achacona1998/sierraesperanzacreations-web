import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
export const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-20 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-gray-500"
    />
  );
};
