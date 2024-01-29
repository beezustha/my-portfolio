const Spotify = () => {
  return (
    <div className="bg-[#21251f]">
      <div className=" ">
        <h3 className="text-header text-[#c8f560] text-center py-10 font-acorn">
          Currently Listening to
        </h3>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="p-12 lg:w-[1/2]">
          <iframe
            className="bg-[#21251f] lg:w-[1/2]"
            style={{ backgroundColor: "#21251f" }}
            src="https://open.spotify.com/embed/track/3SktMqZmo3M9zbB7oKMIF7?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="hidden md:max-w-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          possimus incidunt aliquam animi est voluptates sunt quae tempore
          explicabo soluta, deleniti laborum rerum neque obcaecati expedita nisi
          sapiente. Dolor, recusandae.
        </div>
      </div>
    </div>
  );
};

export default Spotify;
