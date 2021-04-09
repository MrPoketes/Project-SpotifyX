import { gql } from '@apollo/client';

export const CHECK_FOLLOWS_ARTIST = gql`
	query followsArtist($ids: String!) {
		checkIfUserFollows(type: "artist", id: $ids)
	}
`;

export const CHECK_SAVED_TRACKS = gql`
	query savedTracks($ids: String!) {
		checkUsersSavedTracks(ids: $ids)
	}
`;

export const CHECK_SAVED_ALBUMS = gql`
	query savedAlbums($ids: String!) {
		checkUsersSavedAlbums(ids: $ids)
	}
`;

export const CHECK_SAVED_SHOWS = gql`
	query savedShows($ids: String!) {
		checkUsersSavedShows(ids: $ids)
	}
`;
