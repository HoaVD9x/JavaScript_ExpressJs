import axios from '../axios';
const handlerLogin = (email, password) => {
	return axios.post('/api/login', { email, password });
};

export { handlerLogin };
