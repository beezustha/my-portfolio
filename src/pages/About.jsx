import about1 from "../assets/img/about-1.png";
import about2 from "../assets/img/about-2.png";
import about3 from "../assets/img/about-3.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-teal-600 text-white w-full h-full pb-10"
      >
        {" "}
        <div className="header">
          <h3 className="text-header text-center py-10 font-acorn">About Me</h3>
        </div>
        <div className="flex flex-col justify-between lg:space-x-4 sm:flex-col sm:space-y-4 lg:flex-row md:flex-row">
          <div className="w-full md:w-1/2 text-[16px] lg:w-[1/2] p-4 lg:pl-16">
            <div className="font-para description text-center sm:text-center md:text-left leading-loose">
              <p>
                I'm Bijaya Shrestha, A passionate front-end developer with a
                love for crafting user interfaces that not only look good but
                also provide seamless experiences. My journey in the world of
                web development began with a fascination for turning lines of
                code into visually appealing and functional websites.
              </p>

              <p>
                {" "}
                From creating responsive layouts to ensuring smooth
                interactions, I thrive on the dynamic nature of front-end
                development. With a keen eye for design and a commitment to
                staying updated with the latest technologies, I enjoy the
                process of bringing ideas to life in the digital realm.
              </p>
            </div>
          </div>
          {/* Card Sections */}
          <div className="w-full md:w-1/2 lg:w-[1/2] px-10">
            <div className="grid gap-y-4 gap-x-4 grid-cols-2">
              <img src={about1} alt="" className="w-full col-span-2" />
              <img src={about2} alt="" className="w-full h-auto" />
              <img src={about3} alt="" className="w-full h-auto" />
            </div>
            {/* <div className="image-section flex flex-row justify-center md:w-full">
              <img src={about1} alt="" className="w-[1/2] px-6" />
              <img
                src={about2}
                alt=""
                className="hidden md:w-[1/2] lg:w-[1/2] px-6 md:block"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
