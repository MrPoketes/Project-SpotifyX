import { getResponse } from '.';

export const getMe = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me';
	const response = await getResponse(token, url);
	return response.data;
};

export const getUser = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/me/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};
