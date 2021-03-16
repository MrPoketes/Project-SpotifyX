import { getResponse, postResponse, putResponse } from '.';

export const getRecentlyPlayedTracks = async token => {
	const url = 'https://api.spotify.com/v1/me/player/recently-played';
	const response = await getResponse(token, url);
	return response.data.items;
};

export const getInfoCurrentPlayback = async token => {
	const url = 'https://api.spotify.com/v1/me/player';
	const response = await getResponse(token, url);
	return response.data;
};

export const getAvailableDevices = async token => {
	const url = 'https://api.spotify.com/v1/me/player/devices';
	const response = await getResponse(token, url);
	return response.data.devices;
};

export const getCurrentlyPlayingTrack = async (token, market) => {
	const url = `https://api.spotify.com/v1/me/player/currently-playing?market=${market}`;
	const response = await getResponse(token, url);
	const result = JSON.stringify(response.data);
	return result;
};

export const skipToNextTrack = async token => {
	const url = 'https://api.spotify.com/v1/me/player/next';
	const response = await postResponse(token, url);
	return response.data;
};

export const skipToPreviousTrack = async (token: string) => {
	const url = 'https://api.spotify.com/v1/me/player/previous';
	const response = await postResponse(token, url);
	return response.data;
};

export const queueTrack = async (token: string, uri: string, id: string) => {
	const url = `https://api.spotify.com/v1/me/player/queue?uri=${uri}&device_id=${id}`;
	const response = await postResponse(token, url);
	return response.data;
};

export const pause = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/me/player/pause?device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const play = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/me/player/play?device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const repeat = async (token: string, state: string) => {
	const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const seek = async (token: string, position: number) => {
	const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${position}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const shuffle = async (token: string, state: boolean) => {
	const url = `https://api.spotify.com/v1/me/player/shuffle?state=${state}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const setVolume = async (token: string, volume: number, id: string) => {
	const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}&device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};
