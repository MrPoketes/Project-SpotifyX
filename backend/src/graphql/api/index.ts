import axios from 'axios';

export const makeHeaders = (token: string) => {
	return {
		Authorization: 'Bearer ' + token
	};
};
export const getResponse = async (token: string, url: string) => {
	const response = await axios({
		method: 'GET',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

export const postResponse = async (token: string, url: string) => {
	const response = await axios({
		method: 'POST',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

export const putResponse = async (token: string, url: string) => {
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

export const deleteResponse = async (token: string, url: string) => {
	const response = await axios({
		method: 'DELETE',
		url,
		headers: makeHeaders(token)
	});
	return response;
};
