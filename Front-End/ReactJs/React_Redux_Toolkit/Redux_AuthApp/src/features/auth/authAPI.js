import axios from 'axios'

export const loginUserAPI = async (userData) => {
	return await axios.post('https://reqres.in/api/login', userData)
}

