import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<lable>First Name</lable>
			<input {...register('firstName', { required: true, maxLength: 20 })} />
			<lable>Last Name</lable>
			<input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
			<lable>Email</lable>
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
			<input
				type="text-area"
				placeholder="Enter your message here"
				{...register('text-area', {
					required: true,
					maxLength: 750
				})}
			/>
			<input type="submit" />
		</form>
	);
};

export default Contact;
