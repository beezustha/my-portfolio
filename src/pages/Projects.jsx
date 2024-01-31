import project from "../assets/img/project1.jpg";
const Projects = () => {
  const taskifyLink = () => {
    window.location.href = "https://github.com/beezustha/taskify-app";
  };
  const commerceLink = () => {
    window.location.href = "https://github.com/beezustha/ecommerce-application";
  };
  return (
    <section className="bg-[#21251f]">
      <div className="header ">
        <h3 className="text-header text-[#c8f560] text-center py-10 font-acorn">
          My Projects
        </h3>
      </div>
      {/* Project Card Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative w-full h-[200px] pr-5 pl-5 my-2">
          <img
            onClick={commerceLink}
            src={project}
            alt=""
            className="rounded-2xl w-full h-full object-cover cursor-pointer"
          />
          <p className="px-6 absolute bottom-4 right-4 text-black font-poppins">
            Ecommerce Application
          </p>
        </div>
        <div className="relative w-full h-[200px] pr-5 pl-5 my-2">
          <img
            onClick={taskifyLink}
            src={project}
            alt=""
            className="rounded-2xl w-full h-full object-cover cursor-pointer"
          />
          <p className="px-6 absolute bottom-4 right-4 text-black font-poppins">
            Taskify App
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
