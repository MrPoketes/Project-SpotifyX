import { getResponse } from '.';

export const search = async (token: string, query: string) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode`;
	const response = await getResponse(token, url);
	const albums = response.data.albums.items;
	const artists = response.data.artists.items;
	const tracks = response.data.tracks.items;
	const playlists = response.data.playlists.items;
	const shows = response.data.shows.items;
	const episodes = response.data.episodes.items;
	const result = { albums, artists, tracks, playlists, shows, episodes };
	return result;
};
