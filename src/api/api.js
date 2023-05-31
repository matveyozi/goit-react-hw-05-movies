import axios from 'axios';

const KEY = '7c0c458e245909c66f3397c50f32766a';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTrend = async () => {

	try {
		const { data } = await axios.get(`/trending/movie/day`, {
			params: {
				api_key: KEY,
				language: 'en-US'
			}
		});
		return data;
	} catch (error) {
		console.log(error);
		return;
	}
}



export const getSearch = async (query) => {
	try {
		const { data } = await axios.get(
			'/search/movie', {
			params: {
				page: 1,
				query,
				include_adult: false,
				language: 'en-US',
				api_key: KEY
			}
		}
		);
		return await data;
	} catch (error) {
		console.log(error);
		return;
	}
};


export const getDetails = async (id, details='') => {
	try {
		const { data } = await axios.get(
			`/movie/${id}${details}`, {
			params: {
				
				language: 'en-US',
				api_key: KEY
			}
		}
		);
		return await data;
	} catch (error) {
		console.log(error);
		return;
	}
}
