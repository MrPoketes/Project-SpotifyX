import { getResponse } from './index';

export const getAlbum = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/albums/${id}`;
	const response = await getResponse(token, url);
	let data = response.data;
	data.tracks = data.tracks.items;
	return data;
};

export const getAlbumTracks = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/albums/${id}/tracks`;
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getSeveralAlbums = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/albums?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.albums;
};
