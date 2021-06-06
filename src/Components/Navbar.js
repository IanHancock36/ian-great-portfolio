import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
	const [isActive , setActive] = useState('false')

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
						<Link to="/projects">Projects</Link>
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
					<li className='icon'>
						<FaBars/>
					</li>
				</ul>
			</nav>
	
		</div>
	);
};

export default Navbar;
