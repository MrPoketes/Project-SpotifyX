import { getResponse } from '.';

export const getAudioAnalysis = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/audio-analysis/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getAudioFeaturesSeveralTracks = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/audio-features?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.audio_features;
};

export const getAudioFeaturesTrack = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/audio-features/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const getTracks = async (token: string, ids: string) => {
	const url = `https://api.spotify.com/v1/tracks?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.tracks;
};

export const getTrack = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/tracks/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};
