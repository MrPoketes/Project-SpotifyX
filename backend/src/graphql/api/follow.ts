import { deleteResponse, getResponse, putResponse } from '.';

export const getFollowedArtists = async (token: string, type: string) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}`;
	const response = await getResponse(token, url);
	return response.data.artists.items;
};

export const checkIfUserFollows = async (token: string, type: string, id: string) => {
	const url = `https://api.spotify.com/v1/me/following/contains?type=${type}&ids=${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const checkIfUsersFollowPlaylist = async (
	token: string,
	playlist_id: string,
	ids: string
) => {
	const url = `https://api.spotify.com/v1/playlists/${playlist_id}/followers/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

export const followArtistsOrUsers = async (
	token: string,
	type: string,
	ids: string
) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}&ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

export const followPlaylist = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/followers`;
	const response = await putResponse(token, url);
	return response.data;
};

export const unfollowAristsOrUsers = async (
	token: string,
	type: string,
	ids: string
) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}&ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

export const unfollowPlaylist = async (token: string, id: string) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/followers`;
	const response = await deleteResponse(token, url);
	return response.data;
};

export const getTopArtistsAndTracks = async (token: string, type: string) => {
	const url = `https://api.spotify.com/v1/me/top/${type}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};
