import { motion } from "framer-motion";
import "./Preloader.css";
const Preloader = () => {
  return (
    <section className="relative w-full max-w-md">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 75"
        width="150"
        height="75"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <path
          fill="none"
          stroke="#FF156D"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="150 192.5"
          strokeDashoffset="0"
          d="M137.5 37.5c0 15.5-13.5 25-25 25-29 0-46-50-75-50-14 0-25 11-25 25s11 25 25 25c29 0 46-50 75-50 12 0 25 9.5 25 25Z"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="2"
            values="342.5;-342.5"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </section>
  );
};

export default Preloader;
