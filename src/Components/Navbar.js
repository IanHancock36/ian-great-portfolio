import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {
	const [open , setOpen] = useState('false')



	return (
		<div>
			<div onClick={() => setOpen(!open)} className='nav-icon'> {open ? <FiX/> : <FiMenu/>}
				</div>
			<nav className="navbar">
				<Link to='/' className='nav-logo' onClick={() => setOpen(false)}>
					Logo
				</Link>
				<ul className={ open ? 'nav-links active' : 'nav-links'}>
					<li className='nav-item'>
						<Link to="/" className='nav-link' onClick={()=> setOpen(false)}> Home </Link>
						</li>
					<li className='nav-item'>
						<Link to="/about" className='nav-link' onClick={()=> setOpen(false)}> About </Link>
					</li>
					<li className='nav-item'>
						<Link to="/projects" className='nav-link' onClick={()=> setOpen(false)}>Projects</Link>
					</li>
					<li className='nav-item'>
						<Link to="/resume" className='nav-link' onClick={()=> setOpen(false)}>Resume</Link>
					</li>
					<li className='nav-item'>
						<Link to="/testimonials" className='nav-link' onClick={()=> setOpen(false)}>Testimonials</Link>
					</li>
					<li className='nav-item'>
						<Link to="/contact" className='nav-link' onClick={()=> setOpen(false)}>Contact</Link>
					</li>
					
				</ul>
			</nav>
			</div>
	

	
	);
};

export default Navbar;
