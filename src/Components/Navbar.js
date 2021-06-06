import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<ul>
					<li>
						<Link to="/"> Home </Link>
						</li>
					<li>
						<Link to="/about"> About </Link>
					</li>
					<li>
						<Link to="/projects">projects</Link>
					</li>
					<li>
						<Link to="/resume">Resume</Link>
					</li>
					<li>
						<Link to="/testimonials">Testimonials</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
