const Projects = () => {
  //   const posts = [
  //     {
  //       title: "UN Legal Aid",
  //       img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     },
  //     {
  //       title: "Prahar Travels",
  //       img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     },
  //     {
  //       title: "EPCAN",
  //       img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     },
  //     {
  //       title: "WRI",
  //       img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     },
  //   ];

  return (
    <section
      id="projects"
      className="projects mt-12 mx-auto px-4 max-w-screen-xl md:px-8 bg-green-400"
    >
      <div className="text-center">
        <h2 className="p-3.5 mt-10 text-black-500 text-3xl text-center font-semibold font-acorn">
          My Projects{" "}
        </h2>

        <p className="font-ppneuemontreal mt-3 text-gray-500">
          These are the some of my projects
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {/* {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <img
              src={items.img}
              loading="lazy"
              alt={items.title}
              className="w-full h-48 rounded-t-md"
            />

            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{items.title}</h3>
            </div>
          </article>
        ))} */}
      </div>
    </section>
  );
};

export default Projects;
