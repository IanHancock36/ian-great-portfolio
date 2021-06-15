import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
	const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data) 
    return (
		<form onSubmit = {handleSubmit(onSubmit)} className="contact-form">
			<div className="form-group">
				<lable htmlFor="First Name">First Name</lable>
				<input {...register("firstName", { required: true, maxLength: 20 })} />
			</div>
			<div className="form-group">
				<lable htmlFor="Last Name">Last Name</lable>
			<input {...register('lastName',{required: true, maxLength: 20})}/>
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
			<input type = 'submit' /> 

			
		</form>
	);
};

export default Contact;
