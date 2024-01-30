import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
const Home = () => {
  return (
    <>
      <div className="font-acorn h-full bg-[#FCF6F5] text-black-700 lg:w-[1/2] mt-11">
        <div className="">
          {" "}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className=""
            >
              <img
                className="p-3.5 text-black-500 text-5xl font-semibold text-center text-[#6F745D] max-h-[50%] block mx-auto mt-10 origin-right xl:w-[20%]"
                src={profile}
                alt="Profile"
              />
            </motion.div>
          </div>
          <h2 className="p-3.5 text-black-500 text-center text-[#4b0908]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="py-3.5 px-3 text-black-500 text-4xl font-semibold text-center text-[#4b0908]"
            >
              <h2 className="font-poppins">Bijaya Shrestha</h2>
            </motion.div>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className=""
          >
            <h2 className="px-3.5 mb-4 text-black-500 text-2xl text-center font-poppins">
              Front End Developer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=""
          >
            {" "}
            <p className="font-mulish w-full text-[18px] text-center px-7 pt-2 leading-loose my-6 lg:w-[700px] mx-auto">
              Hello, I am Bijaya Shrestha, a skilled Front-end developer
              dedicated to crafting seamless digital experiences. My expertise
              lies in creating visually appealing and functional websites.
            </p>
            <div className="flex items-center justify-around text-white-900 mt-6 mb-6">
              <div className="flex flex-row items-center justify-center space-x-2 mt-5">
                <a href="https://np.linkedin.com/in/beezu">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
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
          <div className="text-stack-main">
            <div className="header text-center text-2xl">
              <p className="inline-block border-b-4 border-indigo-600">
                Tech Stack
              </p>
            </div>
            <div className="logo-section mt-5 flex justify-center">
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
      </div>
    </>
  );
};

export default Home;
