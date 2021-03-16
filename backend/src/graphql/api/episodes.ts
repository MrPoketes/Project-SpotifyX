import { getResponse } from '.';

export const getEpisode = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/episodes/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getSeveralEpisodes = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/episodes?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.episodes;
};
