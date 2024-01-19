import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
const Home = () => {
  return (
    <>
      <div className="font-acorn h-full bg-[#FCF6F5] text-black-700 lg:w-[1/2]">
        <div className="">
          {" "}
          <div className="flex items-center justify-between lg:w-[40%] ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <img
                className="p-3.5 text-black-500 text-5xl font-semibold text-center text-[#6F745D] max-h-[50%] block mx-auto mt-10 origin-right lg:h-auto max-w-[50%]"
                src={profile}
                alt="Profile"
              />
            </motion.div>
          </div>
          <h2 className="p-3.5 text-black-500 font-semibold text-center text-[#4b0908]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="py-3.5 px-3 text-black-500 text-4xl font-semibold text-center text-[#4b0908]"
            >
              <h2>Bijaya Shrestha</h2>
            </motion.div>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className=""
          >
            <h2 className="px-3.5 mb-4 text-black-500 text-2xl text-center font-semibold">
              React Developer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=""
          >
            {" "}
            <p className="font-ppneuemontreal w-full text-md text-center px-7 pt-2 leading-loose my-6 lg:w-[500px] mx-auto">
              Hello, I am Bijaya Shrestha, a skilled Front-end developer
              dedicated to crafting seamless digital experiences. My expertise
              lies in creating visually appealing and functional websites.
            </p>
            <div className="flex items-center justify-around text-white-900 mt-6 mb-6">
              <div className="flex flex-row items-center justify-center space-x-2 mt-5">
                <svg className="w-9 h-9 text-black">
                  {" "}
                  <FacebookIcon />{" "}
                </svg>
                <svg className="w-9 h-9 text-black">
                  {" "}
                  <InstagramIcon />
                </svg>
                <svg className="w-9 h-9 text-black">
                  {" "}
                  <GitHubIcon />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
