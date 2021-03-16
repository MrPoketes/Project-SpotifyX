import { deleteResponse, getResponse, putResponse } from '.';

export const removeAlbums = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/albums?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

export const removeSavedShows = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/shows?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

export const removeTracks = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/tracks?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

export const checkSavedAlbums = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/albums/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const checkSavedShows = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/shows/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const checkSavedTracks = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getSavedAlbums = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me/albums';
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getSavedShows = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me/shows';
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getSavedTracks = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me/tracks';
	const response = await getResponse(token, url);
	return response.data.items;
};

export const saveAlbums = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/albums?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const saveShows = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/shows?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const saveTracks = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/me/tracks?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};
