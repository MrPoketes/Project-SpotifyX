const axios = require('axios');

const makeHeaders = token => {
	return {
		Authorization: 'Bearer ' + token
	};
};

const getMe = async token => {
	const response = await axios({
		method: 'GET',
		url: 'https://api.spotify.com/v1/me',
		headers: makeHeaders(token)
	});
	return response.data;
};

module.exports = getMe;
