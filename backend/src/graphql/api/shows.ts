import { getResponse } from '.';

export const getShows = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/shows?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.shows;
};

export const getShowEpisodes = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/shows/${id}/episodes`;
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getShow = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/shows/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};
