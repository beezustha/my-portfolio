import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      x: {
        duration: 10, // Adjust the duration as needed
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="marquee">
        <motion.div
          onH
          className="track"
          variants={marqueeVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-row mr-5">
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
