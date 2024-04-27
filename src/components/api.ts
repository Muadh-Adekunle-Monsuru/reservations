import axios from 'axios';

export const callApi = async function () {
	try {
		axios
			.get('http://localhost:3001/')
			.then((response) => {
				// console.log(response.data);
				return response.data;
			})
			.catch((e) => console.log(e));
	} catch (e) {
		console.log('Error calling api', e);
	}
};
