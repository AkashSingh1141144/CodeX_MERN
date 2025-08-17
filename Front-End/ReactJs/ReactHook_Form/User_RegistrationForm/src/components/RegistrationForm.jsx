// import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function RegistrationForm() {

	// const [submiteData, setSubmiteData] = useState(null)

	const {
		register, 
		handleSubmit,
		formState: {errors},
		reset
	} = useForm();

	const onSubmit = (data) => {
		console.log(`Submitted Data: `, data);
		// setSubmiteData(data)
		alert(`From Submitted Successfully!`, data)
		reset(); // Clear the form after submition
	}
  return (
	<>
	  <div className="min-h-screen bg-gray-800 flex items-center justify-center">
		 {/* {submiteData && 
			<div className='flextext-white font-semibold text-xl'>
				<h1 className='text-center'>Submited Data: {submiteData.name}</h1>
			</div>
		} */}
		<form 
			onSubmit={handleSubmit(onSubmit)}
			className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6 text-white"
		>
			<h2 className='text-2xl font-bold text-center text-black '>User Registration</h2>
			
			{/* Full Name */}
			<div>
				<label className='block mb-1 font-medium'>Full Name</label>
				<input type="text"
					{...register('name', {required: 'Full Name is required'})}
					className='w-full border p-2 rounded'
					placeholder='FullName'
				/>
				{errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
			</div>

			{/* Email */}
			<div>
				<label className='block mb-1 font-medium'></label>
				<input type="email"
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Invalid Email address'
						},
					})}
					className='w-full border p-2 rounded'
					placeholder='Email'
				/>
				{errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
			</div>

			{/* Password */}
			<div>
				<label className='block mb-1 font-medium'>Password</label>
				<input type="password"
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters',
						},
					})}
					className='w-full border p-2 rounded'
					placeholder='Password'
				/>
				{errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
			</div>

			{/* Gender Selection */}
			<div>
				<label className='block mb-1 font-medium'>Gender</label>
				<select 
					{...register('gender', {
						required: 'Gender is required'
					})}
					className='w-full border p-2 rounded'
				>
					<option value="">Select</option>
					<option value="male">Male</option>
					<option value="femel">Femel</option>
					<option value="other">Other</option>
				</select>
				{errors.gender && <p className='text-red-500 text-sm'>{errors.gender.message}</p>}
			</div>

			{/* Terms Checkbox */}
			<div className='flex items-center'>
				<input type="checkbox"
					{...register('terms', {
						required: 'You must accept the terms',
					})}
					className='mr-2'
				/>
				<label className='font-semibold text-gray-800' >I agree to the Terms and Conditions</label>
			</div>
			{errors.terms && <p className='text-red-500 text-sm'>{errors.terms.message}</p>}

			{/* Submit Button */}
			<button
				type='submit'
				className='w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded'
			>
				Register
			</button>
		</form>
		
	  </div>
	</>
  )
}

export default RegistrationForm
