import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="column">
						<lable>First Name</lable>
					</div>
					<div className="column">
						<input {...register('firstName', { required: true, maxLength: 20 })} />
					</div>
				</div>
				<div className="row">
					<div className="column">
						<lable>Last Name</lable>
					</div>
					<div className="column">
						<input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
					</div>
				</div>
				<div className="row">
					<div className="column">
						<lable>Email</lable>
					</div>
					<div className="column">
						<input
							type="email"
							className="input"
							placeholder="Email"
							required
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Please enter a valid email'
								}
							})}
						/>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<label>Message</label>
					</div>
					<div className="column">
						<input
							type="text-area"
							placeholder="Enter your message here"
							{...register('text-area', {
								required: true,
								maxLength: 750
							})}
						/>
					</div>
				</div>
				<div className="row">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

export default Contact;
