const Footer = () => {
  return (
    <>
      <div className="inset-x-0 bottom-0 font-acorn">
        <div className="bg-indigo-600 px-4 py-3 text-white">
          <p className="text-center text-sm text-[20px]">
            Created by Bijaya Shrestha
          </p>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="path-to-your-image.jpg"
            alt="Spotify Song Cover"
            className="w-full h-64 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Song Title</div>
            <p className="text-gray-700 text-base">Artist: Artist Name</p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Play on Spotify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
