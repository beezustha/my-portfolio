import { motion } from "framer-motion";
import profile from "../assets/profile.png";
const Home = () => {
	return (
		<>
			<div className="font-acorn h-full bg-[#FCF6F5] text-black-700 lg:w-[1/2] mt-11">
				<div className="">
					{" "}
					<div className="flex items-center justify-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className=""
						>
							<img
								className="w-[200px] p-3.5 text-black-500 text-5xl font-semibold text-center text-[#6F745D] max-h-[50%] block mx-auto mt-10 origin-right xl:w-[20%]"
								src={profile}
								alt="Profile"
							/>
							{/* <section className="relative flex justify-center items-center h-[400px]">
								<div className="absolute w-[400px] h-[400px] ">
									<svg
										viewBox="0 0 1000 1000"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="none">
											<image
												src={profile} // Replace with the actual path to your image
												x="100" // Adjust x-coordinate as needed
												y="100" // Adjust y-coordinate as needed
												width="200" // Adjust width as needed
												height="200" // Adjust height as needed
												stroke="black"
												strokeWidth="1px"
												fill="none" // Remove fill to make the image transparent, or adjust as needed
											/>
											<path
												stroke="black"
												strokeWidth="1px"
												fill="none" // Remove fill to make the image transparent, or adjust as needed
												d="M906.5 644Q896 788 774 878t-270 77.5Q356 943 233.5 863T66 641.5Q21 500 59.5 354t167-223.5Q355 53 499.5 55T744 153.5Q844 250 880.5 375t26 269Z"
											>
												<animate
													attributeName="d"
													dur="4000ms"
													repeatCount="indefinite"
													values="M906.5 644Q896 788 774 878t-270 77.5Q356 943 233.5 863T66 641.5Q21 500 59.5 354t167-223.5Q355 53 499.5 55T744 153.5Q844 250 880.5 375t26 269Z;  M917 641q-29 141-155 209t-268.5 88.5q-142.5 20.5-235-88T89.5 621Q13 500 79.5 371t174-214.5Q361 71 493 93t249 84q117 62 160.5 192.5T917 641Z;  M924 634.5q-54 134.5-177 191t-261.5 100Q347 969 232 873.5T75.5 639Q34 500 93.5 374t167-203Q368 94 502 88.5t256 65Q880 224 929 362t-5 272.5Z; M907.5 629q-52.5 129-153 236.5T502 967.5Q350 962 229.5 873t-147-231Q56 500 85 360t147-230.5Q350 39 501.5 34T773 121.5Q893 214 926.5 357t-19 272Z; M907.5 631.5q-45.5 131.5-156 217T507 912q-134-22-261.5-78t-177-195Q19 500 60 355t176.5-197.5Q372 105 499.5 107t254 59.5Q880 224 916.5 362t-9 269.5Z; M906.5 644Q896 788 774 878t-270 77.5Q356 943 233.5 863T66 641.5Q21 500 59.5 354t167-223.5Q355 53 499.5 55T744 153.5Q844 250 880.5 375t26 269Z;"
												></animate>
											</path>
										</g>
									</svg>
								</div>
							</section> */}
						</motion.div>
					</div>
					<h2 className="p-3.5 text-black-500 text-center text-[#4b0908]">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="py-3.5 px-3 text-black-500 text-4xl font-semibold text-center text-[#4b0908]"
						>
							<h2 className="px-3.5 mb-4 text-black-500 text-2xl text-center font-poppins font-bold">
								Front End Developer
							</h2>
						</motion.div>
					</h2>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className=""
					>
						{" "}
						<p className="font-mulish w-full text-[1.8 rem] text-center px-7 leading-loose mb-6 lg:w-[700px] mx-auto">
							Hello, I am Bijaya Shrestha, a skilled Front-end
							developer dedicated to crafting seamless digital
							experiences. My expertise lies in creating visually
							appealing and functional websites.
						</p>
						<div className="flex items-center justify-around text-white-900 mt-6 mb-6">
							<div className="flex flex-row items-center justify-center space-x-2">
								<a href="https://np.linkedin.com/in/beezu">
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-brand-linkedin"
										width={28}
										height={28}
										viewBox="0 0 28 28"
										strokeWidth={2}
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
									</svg>
								</a>
								<a href="https://github.com/beezustha">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-brand-linkedin"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										strokeWidth="2"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
										<path d="M8 11l0 5" />
										<path d="M8 8l0 .01" />
										<path d="M12 16l0 -5" />
										<path d="M16 16v-3a2 2 0 0 0 -4 0" />
									</svg>
								</a>
							</div>
						</div>
					</motion.div>
					<div className="text-stack-main">
						<div className="header text-center text-2xl">
							<p className="inline-block border-b-4 border-indigo-600 mb-4 font-mulish">
								Tech Stack
							</p>
						</div>
						<div className="logo-section mt-5 flex justify-center">
							<ul className="flex">
								<li className="px-1">
									<img
										src="https://skillicons.dev/icons?i=html,css"
										alt=""
									/>
								</li>
								<li className="px-1">
									<img
										src="https://skillicons.dev/icons?i=javascript,tailwind"
										alt=""
									/>
								</li>
								<li className="px-1">
									<img
										src="https://skillicons.dev/icons?i=react,typescript"
										alt=""
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
