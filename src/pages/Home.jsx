import { motion } from "framer-motion";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="font-acorn h-full bg-[#FCF6F5] text-black-700 lg:w-[1/2] mt-11">
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:w-3/4 pt-12 md:justify-between mx-auto">
          {" "}
          {/* hero etxt */}
          <div className="hero-text flex flex-col mt-10 lg:mt-24">
            {/* Designation Title */}
            <h2 className="text-black-500 text-[#4b0908]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="px-3 text-black-500 font-semibold text-center text-[#4b0908] lg:py-3.5"
              >
                <p className="px-3.5 text-black-500 text-3xl text-center font-poppins font-bold lg:text-left">
                  Front End Developer
                </p>
              </motion.div>
            </h2>
            {/* Sub heading section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                {" "}
                <p className="font-mulish w-full text-[1.8 rem] text-left px-7 leading-loose mb-6 lg:w-[700px] mx-auto">
                  <span className="font-bold">Hello!</span>, I am Bijaya
                  Shrestha, a skilled Front-end developer dedicated to crafting
                  seamless digital experiences. My expertise lies in creating
                  visually appealing and functional websites.
                </p>
              </motion.div>
            </div>
            {/* github and linkedin */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-black-500 font-semibold"
            >
              <div className="flex items-center justify-center text-white-900 mt-6 mb-6 px-6 lg:justify-start">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <a href="https://np.linkedin.com/in/beezu">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                  <a href="https://github.com/beezustha">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M8 11l0 5" />
                      <path d="M8 8l0 .01" />
                      <path d="M12 16l0 -5" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Hero Image section */}
          <div className="w-3/4 mx-auto flex items-center justify-center pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className=""
            >
              <section className="wrapper flex items-center">
                <div className="hero-img"></div>
              </section>
            </motion.div>
          </div>
        </div>
        {/* Tech Stack Section */}
        <div className="text-stack-main lg:mt-20">
          <div className="header text-center text-2xl">
            <p className="inline-block border-b-4 border-indigo-600 mb-4 font-mulish">
              Tech Stack
            </p>
          </div>
          <div className="logo-section mt-5 flex justify-center pb-20">
            <ul className="flex">
              <li className="px-1">
                <img src="https://skillicons.dev/icons?i=html,css" alt="" />
              </li>
              <li className="px-1">
                <img
                  src="https://skillicons.dev/icons?i=javascript,tailwind"
                  alt=""
                />
              </li>
              <li className="px-1">
                <img
                  src="https://skillicons.dev/icons?i=react,typescript"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
