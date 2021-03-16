import { getResponse, makeHeaders, postResponse } from '.';
import axios from 'axios';

export const removePlaylistItems = async (token, id, body) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
	const response = await axios({
		method: 'DELETE',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data.snapshot_id;
};

export const getCurrentUserPlaylists = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me/playlists';
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getPlaylistImage = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/images`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getPlaylistItems = async (token: string, id: string, market: string) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?market=${market}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};

export const getPlaylist = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/playlists/${id}`;
	const response = await getResponse(token, url);
	let result = { ...response.data };
	result.tracks = [...response.data.tracks.items];
	result.tracks.forEach((track, i) => {
		result.tracks[i].track = JSON.stringify(result.tracks[i].track);
	});
	return result;
};

export const getUserPlaylists = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/users/${id}/playlists`;
	const response = await getResponse(token, url);
	return response.data.items;
};

export const addItemsToPlaylist = async (
	token: string,
	id: string,
	position: number,
	uris: string
) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?position=${position}&uris=${uris}`;
	const response = await postResponse(token, url);
	return response.data.snapshot_id;
};

export const createPlaylist = async (
	token: string,
	id: string,
	name: string,
	description: string,
	isPublic: boolean
) => {
	const body = {
		name,
		description,
		public: isPublic
	};
	const url = `https://api.spotify.com/v1/users/${id}/playlists`;
	const response = await axios({
		method: 'POST',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data;
};
// Change body later when needed
export const reorderPlaylistItems = async (
	token: string,
	id: string,
	uris: string,
	body
) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uris}`;
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data;
};
// Change body later when needed
export const modifyPlaylistDetails = async (token: string, id: string, body) => {
	const url = `https://api.spotify.com/v1/playlists/${id}`;
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return JSON.stringify(response.data);
};
