import { useState } from 'react';
import { useForm } from 'react-hook-form'

function UseForm() {
	const [submitedData, setSubmitedData] = useState(null)

	const {register, handleSubmit, formState: { errors }} = useForm()

	const onSubmit = (data) => {
		console.log(data);
		setSubmitedData(data)
		alert('Form Submited Successfuly')
	}

  return (
	<>
	  <form className='text-xl font-bold flex flex-col w-1/3 mx-auto my-36 bg-gradient-to-tl from-green-500 to-white p-4 rounded-lg text-black' onSubmit={handleSubmit(onSubmit)}>
		<input
        {...register("name", { required: true })}
        placeholder="Name"
		className='text-white p-4 mb-3'
      />
	  {errors.name && <p>Name is Required</p>}

	  <input 
	 		{
				...register("email", {required: true})
			} 
			placeholder='Email'
			className='text-white p-4 mb-3'
	  />
	  {errors.email && <p>Email is required</p>}

	  <button 
	  	type='submit'
	  	className='bg-white p-4 rounded-lg text-orange-600 font-bold'
	  	>Submit</button>
	  </form>
		
		{submitedData && (
			<div className='text-white font-bold text-2xl text-center'>
				<h2>Submited Data: <span className='text-black'>{submitedData.name}</span></h2>
				<h2>Submited Data: <span className='text-black'>{submitedData.email}</span></h2>
			</div>
		)}
	</>
  )
}

export default UseForm