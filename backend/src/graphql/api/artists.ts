import { getResponse } from './index';

export const getArtistAlbums = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}/albums`;
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getArtistsRelatedArtists = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;
	const response = await getResponse(token, url);
	return response.data.artists;
};

export const getArtistTopTracks = async (token: string, id: string, market: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`;
	const response = await getResponse(token, url);
	return response.data.tracks;
};

export const getArtist = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/artists/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getArtists = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/artists?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.artists;
};
