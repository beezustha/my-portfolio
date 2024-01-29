import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate(path);
  };
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  //   console.log(datas, "hello");
  //   const handleChange = (e) => {
  //     setDatas({ ...datas, [e.target.name]: e.target.value });
  //   };
  //   //   const notify = () => toast("Here is your toast.");
  const notify = (e) => {
    e.preventDefault();
    toast("Form submitted sucessfully");
    console.log(datas);
    setDatas({});
  };
  return (
    <>
      <section className="bg-teal-800 w-full text-white p-8">
        <h3 className="text-header font-slabo">Contact Me</h3>
        <form className="font-poppins">
          <div className="mb-6 flex justify-center w-full">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                // onChange={handleChange}
                value={datas.name}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex justify-center">
            <div>
              {" "}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                // onChange={handleChange}
                value={datas.email}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="beexustha@gmail.com"
                required
              />
            </div>
          </div>
          <div className="mb-6 flex justify-center">
            <div>
              {" "}
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact
              </label>
              <input
                // onChange={handleChange}
                value={datas.contact}
                type="text"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </div>
          <div className="mb-6 flex justify-center">
            <div>
              <button
                onClick={routeChange}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <Toaster />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
