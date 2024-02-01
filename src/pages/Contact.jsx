import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#FCF6F5] w-full py-10 flex justify-evenly lg:flex flex-col">
        <div className="header pt-8">
          <h3 className="text-header text-[#2D2E32] text-center py-10 font-poppins font-bold">
            Contact Information
          </h3>
        </div>
        <div className="contact-icon flex flex-col justify-evenly lg:flex-row lg:justify-arpund lg:space-x-10">
          <div className="location flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin-filled text-[#2D2E32] mt-5"
              width={40}
              height={40}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                strokeWidth={0}
                fill="currentColor"
              />
            </svg>
            <p className="text-xl font-mulish text-[#2D2E32] mt-5"> Location</p>
            <p className="text-l font-mulish text-[#2D2E32] mt-5">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="location flex flex-col items-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-filled text-[#2D2E32]"
              width={40}
              height={40}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                strokeWidth="0"
                fill="currentColor"
              />
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
            <p className="text-xl font-mulish text-[#2D2E32] mt-5">
              Mail Address
            </p>
            <p className="text-l font-mulish text-[#2D2E32] mt-5">
              beezustha@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
