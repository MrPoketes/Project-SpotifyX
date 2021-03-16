import { getResponse } from '.';

export const search = async (token: string, query: string, type: string) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};
