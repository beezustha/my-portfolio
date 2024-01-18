import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className="bg-blue-500 p-4 text-white">
				<nav className="flex items-center justify-between">
					<Link to="/" className="text-lg font-bold">
						Home
					</Link>
					<div className="flex space-x-4">
						<Link to="/experience">Experience</Link>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
