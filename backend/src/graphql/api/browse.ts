import { getResponse } from './index';

export const getAvailableGenreSeeds = async (token: string) => {
	const url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
	const response = await getResponse(token, url);
	return response.data.genres;
};

export const getBrowseCategories = async (token: string, country: string) => {
	let url = '';
	if (country !== '') {
		url = `https://api.spotify.com/v1/browse/categories?country=${country}`;
	} else {
		url = 'https://api.spotify.com/v1/browse/categories';
	}
	const response = await getResponse(token, url);
	return response.data.categories.items;
};

export const getBrowseCategory = async (token: string, id: string, country: string) => {
	let url = '';
	if (country !== '') {
		url = `https://api.spotify.com/v1/browse/categories/${id}?country=${country}`;
	} else {
		url = `https://api.spotify.com/v1/browse/categories/${id}`;
	}
	const response = await getResponse(token, url);
	return response.data;
};

export const getCategoryPlaylists = async (
	token: string,
	id: string,
	country: string
) => {
	let url = '';
	if (country !== '') {
		url = `https://api.spotify.com/v1/browse/categories/${id}/playlists?country=${country}`;
	} else {
		url = `https://api.spotify.com/v1/browse/categories/${id}/playlists`;
	}
	const response = await getResponse(token, url);
	return response.data.playlists.items;
};

export const getFeaturedPlaylists = async (token: string, country: string) => {
	let url = '';
	if (country === '') {
		url = 'https://api.spotify.com/v1/browse/featured-playlists';
	} else {
		url = `https://api.spotify.com/v1/browse/featured-playlists?country=${country}`;
	}
	const response = await getResponse(token, url);
	return response.data.playlists.items;
};

export const getNewReleases = async (token: string, country: string) => {
	const url = `https://api.spotify.com/v1/browse/new-releases?country=${country}`;
	const response = await getResponse(token, url);
	return response.data.albums.items;
};

export const getRecommendations = async (
	token: string,
	seed_artists: string,
	seed_genres: string,
	seed_tracks: string
) => {
	const url = `https://api.spotify.com/v1/recommendations?seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}`;
	const response = await getResponse(token, url);
	return response.data;
};
