import { motion } from "framer-motion";
import about1 from "../assets/img/about-1.png";
import about2 from "../assets/img/about-2.png";
import about3 from "../assets/img/about-3.png";
import football from "../assets/img/football.png";
import jupiter from "../assets/img/jupiter.png";
const About = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <section id="about" className="relative w-3/4 h-full pb-10 mt-10 mx-auto">
        {/* Background icmage */}
        <img
          src={jupiter}
          alt=""
          className="absolute w-[120px] top-40 right-10 md:w-[200px] md:top-0 md:right-50 lg:w-[300px] lg:top-0 lg:right-10 z-9999"
        />
        <div className="header">
          <h3 className="text-header text-[#c8f560] text-center py-10 font-acorn">
            About Me
          </h3>
        </div>
        <div className="flex flex-col-reverse justify-between lg:space-x-4 sm:flex-col sm:space-y-4 lg:flex-row md:flex-row">
          <div className="w-full md:w-1/2 text-[1.1rem] lg:w-[1/2] p-4 lg:pl-16">
            <div className="font-para description text-center sm:text-center md:text-left leading-loose">
              <p>
                I'm Bijaya Shrestha, A passionate front-end developer with a
                love for crafting user interfaces that not only look good but
                also provide seamless experiences. My journey in the world of
                web development began with a fascination for turning lines of
                code into visually appealing and functional websites.
              </p>
            </div>
          </div>
          {/* Card Sections */}
          <div className="w-full md:w-1/2 lg:w-[1/2] px-5 lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1 }}
              className="text-white shadow-lg"
            >
              <div className="w-full grid gap-y-4 gap-x-4 grid-cols-2">
                <img
                  src={football}
                  alt=""
                  className="rounded-2xl w-full col-span-2 "
                />
              </div>
              {/* <div className="image-section flex flex-row justify-center md:w-full">
              <img src={about1} alt="" className="w-[1/2] px-6" />
              <img
                src={about2}
                alt=""
                className="hidden md:w-[1/2] lg:w-[1/2] px-6 md:block"
              />
            </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
