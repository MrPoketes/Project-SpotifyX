const axios = require('axios');

const makeHeaders = token => {
	return {
		Authorization: 'Bearer ' + token
	};
};
const getResponse = async (token, url) => {
	const response = await axios({
		method: 'GET',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

const postResponse = async (token, url) => {
	const response = await axios({
		method: 'POST',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

const putResponse = async (token, url) => {
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

const deleteResponse = async (token, url) => {
	const response = await axios({
		method: 'DELETE',
		url,
		headers: makeHeaders(token)
	});
	return response;
};

// Requests for Albums

const getAlbum = async (token, id) => {
	const url = `https://api.spotify.com/v1/albums/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getAlbumTracks = async (token, id) => {
	const url = `https://api.spotify.com/v1/albums/${id}/tracks`;
	const response = await getResponse(token, url);
	return response.data.items;
};

const getSeveralAlbums = async (token, ids) => {
	const url = `https://api.spotify.com/v1/albums?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.albums;
};

//  Requests for Artists

const getArtistAlbums = async (token, id) => {
	const url = `https://api.spotify.com/v1/artists/${id}/albums`;
	const response = await getResponse(token, url);
	return response.data.items;
};

const getArtistsRelatedArtists = async (token, id) => {
	const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;
	const response = await getResponse(token, url);
	return response.data.artists;
};

const getArtistTopTracks = async (token, id, market) => {
	const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`;
	const response = await getResponse(token, url);
	return response.data.tracks;
};

const getArtist = async (token, id) => {
	const url = `https://api.spotify.com/v1/artists/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getArtists = async (token, ids) => {
	const url = `https://api.spotify.com/v1/artists?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.artists;
};

// Requests for Browse

const getAvailableGenreSeeds = async token => {
	const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
	const response = await getResponse(token, url);
	return response.data;
};

const getBrowseCategories = async (token, country) => {
	const url = `https://api.spotify.com/v1/browse/categories?country=${country}`;
	const response = await getResponse(token, url);
	return response.data.categories.items;
};

const getBrowseCategory = async (token, id, country) => {
	const url = `https://api.spotify.com/v1/browse/categories/${id}?country=${country}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getCategoryPlaylists = async (token, id, country) => {
	const url = `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=${country}`;
	const response = await getResponse(token, url);
	return response.data.playlists.items;
};

const getFeaturedPlaylists = async (token, country) => {
	const url = `https://api.spotify.com/v1/browse/featured-playlists?country=${country}`;
	const response = await getResponse(token, url);
	return response.data.playlists.items;
};

const getNewReleases = async (token, country) => {
	const url = `https://api.spotify.com/v1/browse/new-releases?country=${country}`;
	const response = await getResponse(token, url);
	return response.data.albums.items;
};

const getRecommendations = async (token, seed_artists, seed_genres, seed_tracks) => {
	const url = `https://api.spotify.com/v1/recommendations?seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}`;
	const response = await getResponse(token, url);
	return response.data;
};

// Requests for Episodes

const getEpisode = async (token, id) => {
	const url = `https://api.spotify.com/v1/episodes/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getSeveralEpisodes = async (token, ids) => {
	const url = `https://api.spotify.com/v1/episodes?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.episodes;
};

// Requests for Follow

const checkIfUserFollows = async (token, type) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}`;
	const response = await getResponse(token, url);
	return response.data.artists.items;
};

const checkIfUsersFollowPlaylist = async (token, playlist_id, ids) => {
	const url = `https://api.spotify.com/v1/playlists/${playlist_id}/followers/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

const followArtistsOrUsers = async (token, type, ids) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}&ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

const followPlaylist = async (token, id) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/followers`;
	const response = await putResponse(token, url);
	return response.data;
};

const unfollowAristsOrUsers = async (token, type, ids) => {
	const url = `https://api.spotify.com/v1/me/following?type=${type}&ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

const unfollowPlaylist = async (token, id) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/followers`;
	const response = await deleteResponse(token, url);
	return response.data;
};

// Requests for Library

const removeAlbums = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/albums?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

const removeSavedShows = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/shows?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

const removeTracks = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/tracks?ids=${ids}`;
	const response = await deleteResponse(token, url);
	return response.data;
};

const checkSavedAlbums = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/albums/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

const checkSavedShows = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/shows/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

const checkSavedTracks = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getSavedAlbums = async token => {
	const url = 'https://api.spotify.com/v1/me/albums';
	const response = await getResponse(token, url);
	return response.data.items;
};

const getSavedShows = async token => {
	const url = 'https://api.spotify.com/v1/me/shows';
	const response = await getResponse(token, url);
	return response.data.items;
};

const getSavedTracks = async token => {
	const url = 'https://api.spotify.com/v1/me/tracks';
	const response = await getResponse(token, url);
	return response.data.items;
};

const saveAlbums = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/albums?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

const saveShows = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/shows?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

const saveTracks = async (token, ids) => {
	const url = `https://api.spotify.com/v1/me/tracks?ids=${ids}`;
	const response = await putResponse(token, url);
	return response.data;
};

// Requests for Personalization

const getTopArtistsAndTracks = async (token, type) => {
	const url = `https://api.spotify.com/v1/me/top/${type}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};

// Requests for Player

const getRecentlyPlayedTracks = async token => {
	const url = 'https://api.spotify.com/v1/me/player/recently-played';
	const response = await getResponse(token, url);
	return response.data.items;
};

const getInfoCurrentPlayback = async token => {
	const url = 'https://api.spotify.com/v1/me/player';
	const response = await getResponse(token, url);
	return response.data;
};

const getAvailableDevices = async token => {
	const url = 'https://api.spotify.com/v1/me/player/devices';
	const response = await getResponse(token, url);
	return response.data.devices;
};

const getCurrentlyPlayingTrack = async (token, market) => {
	const url = `https://api.spotify.com/v1/me/player/currently-playing?market=${market}`;
	const response = await getResponse(token, url);
	const result = JSON.stringify(response.data);
	return result;
};

const skipToNextTrack = async token => {
	const url = 'https://api.spotify.com/v1/me/player/next';
	const response = await postResponse(token, url);
	return response.data;
};

const skipToPreviousTrack = async token => {
	const url = 'https://api.spotify.com/v1/me/player/previous';
	const response = await postResponse(token, url);
	return response.data;
};

const queueTrack = async (token, uri, id) => {
	const url = `https://api.spotify.com/v1/me/player/queue?uri=${uri}&device_id=${id}`;
	const response = await postResponse(token, url);
	return response.data;
};

const pause = async (token, id) => {
	const url = `https://api.spotify.com/v1/me/player/pause?device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};

const play = async (token, id) => {
	const url = `https://api.spotify.com/v1/me/player/play?device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};

const repeat = async (token, state) => {
	const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}`;
	const response = await putResponse(token, url);
	return response.data;
};

const seek = async (token, position) => {
	const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${position}`;
	const response = await putResponse(token, url);
	return response.data;
};

const shuffle = async (token, state) => {
	const url = `https://api.spotify.com/v1/me/player/shuffle?state=${state}`;
	const response = await putResponse(token, url);
	return response.data;
};

const setVolume = async (token, volume, id) => {
	const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}&device_id=${id}`;
	const response = await putResponse(token, url);
	return response.data;
};

// Requests for Playlists

const removePlaylistItems = async (token, id, body) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
	const response = await axios({
		method: 'DELETE',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data.snapshot_id;
};

const getCurrentUserPlaylists = async token => {
	const url = 'https://api.spotify.com/v1/me/playlists';
	const response = await getResponse(token, url);
	return response.data.items;
};

const getPlaylistImage = async (token, id) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/images`;
	const response = await getResponse(token, url);
	return response.data;
};

const getPlaylistItems = async (token, id, market) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?market=${market}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};

const getPlaylist = async (token, id) => {
	const url = `https://api.spotify.com/v1/playlists/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getUserPlaylists = async (token, id) => {
	const url = `https://api.spotify.com/v1/users/${id}/playlists`;
	const response = await getResponse(token, url);
	return response.data.items;
};

const addItemsToPlaylist = async (token, id, position, uris) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?position=${position}&uris=${uris}`;
	const response = await postResponse(token, url);
	return response.data.snapshot_id;
};

const createPlaylist = async (token, id, body) => {
	const url = `https://api.spotify.com/v1/users/${id}/playlists`;
	const response = await axios({
		method: 'POST',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data;
};

const reorderPlaylistItems = async (token, id, uris, body) => {
	const url = `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uris}`;
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return response.data;
};

const modifyPlaylistDetails = async (token, id, body) => {
	const url = `https://api.spotify.com/v1/playlists/${id}`;
	const response = await axios({
		method: 'PUT',
		url,
		headers: makeHeaders(token),
		data: body
	});
	return JSON.stringify(response.data);
};

// Requests for Search

const search = async (token, query, type) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
	const response = await getResponse(token, url);
	return JSON.stringify(response.data);
};

// Requests for Tracks

const getAudioAnalysis = async (token, id) => {
	const url = `https://api.spotify.com/v1/audio-analysis/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getAudioFeaturesSeveralTracks = async (token, ids) => {
	const url = `https://api.spotify.com/v1/audio-features?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.audio_features;
};

const getAudioFeaturesTrack = async (token, id) => {
	const url = `https://api.spotify.com/v1/audio-features/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

const getTracks = async (token, ids) => {
	const url = `https://api.spotify.com/v1/tracks?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.tracks;
};

const getTrack = async (token, id) => {
	const url = `https://api.spotify.com/v1/tracks/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

// Requests for Shows

const getShows = async (token, ids) => {
	const url = `https://api.spotify.com/v1/shows?ids=${ids}`;
	const response = await getResponse(token, url);
	return response.data.shows;
};

const getShowEpisodes = async (token, id) => {
	const url = `https://api.spotify.com/v1/shows/${id}/episodes`;
	const response = await getResponse(token, url);
	return response.data.items;
};

const getShow = async (token, id) => {
	const url = `https://api.spotify.com/v1/shows/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

// Requests for Users

const getMe = async token => {
	const url = 'https://api.spotify.com/v1/me';
	const response = await getResponse(token, url);
	return response.data;
};

const getUser = async (token, id) => {
	const url = `https://api.spotify.com/v1/me/${id}`;
	const response = await getResponse(token, url);
	return response.data;
};

module.exports = {
	getMe,
	getUser,
	getShow,
	getShowEpisodes,
	getShows,
	getTrack,
	getAlbum,
	getAlbumTracks,
	getArtist,
	getArtistAlbums,
	getArtistTopTracks,
	getArtists,
	getArtistsRelatedArtists,
	getAudioAnalysis,
	getAudioFeaturesSeveralTracks,
	getAudioFeaturesTrack,
	getAvailableDevices,
	getAvailableGenreSeeds,
	getBrowseCategories,
	getBrowseCategory,
	getCategoryPlaylists,
	getCurrentUserPlaylists,
	getCurrentlyPlayingTrack,
	getEpisode,
	getFeaturedPlaylists,
	getInfoCurrentPlayback,
	getNewReleases,
	getPlaylist,
	getPlaylistImage,
	getPlaylistItems,
	getRecentlyPlayedTracks,
	getRecommendations,
	getResponse,
	getSavedAlbums,
	getSavedShows,
	getSavedTracks,
	getSeveralAlbums,
	getSeveralEpisodes,
	getTopArtistsAndTracks,
	getTracks,
	getUserPlaylists,
	unfollowAristsOrUsers,
	unfollowPlaylist,
	followArtistsOrUsers,
	followPlaylist,
	checkIfUserFollows,
	checkIfUsersFollowPlaylist,
	checkSavedAlbums,
	checkSavedShows,
	checkSavedTracks,
	search,
	modifyPlaylistDetails,
	reorderPlaylistItems,
	createPlaylist,
	addItemsToPlaylist,
	removeAlbums,
	removePlaylistItems,
	removeSavedShows,
	removeTracks,
	setVolume,
	shuffle,
	seek,
	repeat,
	play,
	pause,
	queueTrack,
	skipToNextTrack,
	skipToPreviousTrack,
	saveAlbums,
	saveShows,
	saveTracks
};
