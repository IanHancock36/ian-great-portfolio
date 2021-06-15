import React,{useEffect, useState} from 'react';

const Contact = () => {
    const [firstName ,setFirstName]= useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
	
    
    return (
		<form className="contact-form">
			<div className="form-group">
				<lable htmlFor="First Name">First Name</lable>
				<input type="text" placeholder="First Name" />
			</div>
			<div className="form-group">
				<lable htmlFor="Last Name">Last Name</lable>
				<input type="text" placeholder="Last Name" />
			</div>
			<div className="form-group">
				<lable htmlFor="Email">Email</lable>
				<input type="text" placeholder="Email Address" />
			</div>
			<div className="form-group">
				<lable htmlFor="Phone Number">Phone Number</lable>
				<input type="text" placeholder="Phone Number" />
			</div>
			<div className="form-group">
				<lable htmlFor="Message">Message</lable>
				<input type="text-area" className="message-box" placeholder="Enter your message here" />
			</div>

			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	);
};

export default Contact;
