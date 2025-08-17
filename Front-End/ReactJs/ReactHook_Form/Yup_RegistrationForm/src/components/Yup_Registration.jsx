import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Validation schema usnig Yup
const schema = yup.object().shape({
	fullName: yup.string().required('Full Name is required').min(3, 'Too short'),
	email: yup.string().required('Email is required').email('Invalid email address'),
	password: yup.string()
	.required('Password is required')
	.min(8, 'Minimum 8 characters')
	.matches(/[A-Z]/, 'At least one uppercase letter')
	.matches(/[a-z]/, 'At least one lowercase letter')
	.matches(/[0-9]/, 'At least one number')
	.matches(/[^a-zA-Z0-9]/, 'At least one special character'),
	confirmPassword: yup.string()
	.oneOf([yup.ref('password'), null], 'Password must watch')
	.required('Please confirm your password'),
	phone: yup.string()
	.required('Phone number is required')
	.max(10, 'Maximum 10 digits')
	.matches(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
	gender: yup.string().required('Please select gender'),
	terms: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});
function Yup_Registration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = (data) => {
		console.log('Submited Data: ', data);
		alert('Registration Successfull!')
		reset()
	}
  return (
	<>
	  <div>
		<form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto mt-10 p-8 border rounded-lg shadow-sm bg-white space-y-6 text-gray-600'>
			<h2 className='text-2xl font-bold text-center text-black '>User Registration</h2>

			{/* Full Name */}
			<div>
				<label className='block font-medium'>Full Name</label>
				<input type="text"
					{...register('fullName')}
					className='w-full p-2 border rounded text-white'
					placeholder='Full Name'
				/>
				<p className='text-red-600 text-sm'>{errors.fullName?.message}</p>
			</div>

			{/* Email */}
			<div>
			<label className='block font-medium'>Email</label>
			<input type="email"
				{...register('email')}
				className='w-full p-2 border rounded text-white'
				placeholder='Email'
			/>
			<p className='text-red-600 text-sm'>{errors.email?.message}</p>
			</div>


			{/* Password */}
			<div>
				<label className='block font-medium'>Password</label>
				<input type="password"
					{...register('password')}
					className='w-full p-2 border rounded text-white'
					placeholder='Password'
				/>
				<p className='text-red-600 text-sm'>{errors.password?.message}</p>
			</div>

			{/* Confirm Password */}
			<div>
				<label className='block font-medium'>Confirm Password</label>
				<input type="password"
					{...register('confirmPassword')}
					className='w-full p-2 border rounded text-white'
					placeholder='Confirm Password'
				/>
				<p className='text-red-600 text-sm'>{errors.confirmPassword?.message}</p>
			</div>
			

			{/* Phone */}
			<div>
				<label className='block font-medium'>Phone Number</label>
				<input type="text" 
					{...register('phone')}
					className='w-full p-2 border rounded text-white'
					placeholder='Phone Number'
				/>
				<p className='text-red-600 text-sm'>{errors.phone?.message}</p>
			</div>

			{/* Gender */}
			<div>
				<label className='block font-medium'>Gender</label>
				<select {...register('gender')} className='w-full p-2 border rounded text-white'>
					<option value="">-- Select Gender --</option>
					<option value="male">Male</option>
					<option value="femal">Femal</option>
					<option value="other">Other</option>
				</select>
				<p className='text-red-600 text-sm'>{errors.gender?.message}</p>
			</div>

			{/* Terms and Condtions*/}
			<div className='flex items-center gap-2'>
				<input type="checkbox" 
					{...register('terms')}
				/>
				<label className='text-black font-semibold' >I accept the terms and conditions</label>
			</div>
			<p className='text-red-600 text-sm'>{errors.terms?.message}</p>

			{/* Submit Button */}
			<button
				type='submit'
				className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded'
			>
				Register
			</button>
		</form>
	  </div>
	</>
  )
}

export default Yup_Registration

