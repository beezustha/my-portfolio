import about1 from "../assets/img/about-1.png";
import about2 from "../assets/img/about-2.png";

const About = () => {
  return (
    <>
      <section id="about" className="bg-teal-600 text-white w-full h-screen">
        <div className="header">
          <h3 className="text-header text-center py-10">About Me</h3>
        </div>
        <div className="lg:flex flex-row justify-between lg:space-x-4 sm:flex-row sm:space-y-4">
          <div className="w-full md:w-1/2 text-[16px] lg:w-[1/2] p-4 lg:pl-16">
            <div className="font-para description text-center sm:text-center md:text-left">
              Hello! I'm Bijaya Shrestha, A passionate front-end developer with
              a love for crafting user interfaces that not only look good but
              also provide seamless experiences. My journey in the world of web
              development began with a fascination for turning lines of code
              into visually appealing and functional websites. From creating
              responsive layouts to ensuring smooth interactions, I thrive on
              the dynamic nature of front-end development. With a keen eye for
              design and a commitment to staying updated with the latest
              technologies, I enjoy the process of bringing ideas to life in the
              digital realm.
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[1/2] py-4 px-8">
            <div className="image-section flex flex-row justify-center md:w-full">
              <img src={about1} alt="" className="w-[1/2] px-6" />
              <img
                src={about2}
                alt=""
                className="hidden md:w-[1/2] lg:w-[1/2] px-6 md:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
