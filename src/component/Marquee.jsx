import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      x: {
        duration: 15, // Adjust the duration as needed
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
          <div className="flex flex-row my-5">
            <div className="w-auto rounded-md bg-teal-600 mx-5 px-6 py-2 fonts-poppins text-white">
              HTML
            </div>
            <div className="w-auto rounded-md bg-teal-600 mx-5 px-6 py-2 fonts-poppins text-white">
              CSS
            </div>
            <div className="w-auto rounded-md bg-teal-600 mx-5 px-6 py-2 fonts-poppins text-white">
              Javascript
            </div>
            <div className="w-auto rounded-md bg-teal-600 mx-5 px-6 py-2 fonts-poppins text-white">
              ReactJS
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
