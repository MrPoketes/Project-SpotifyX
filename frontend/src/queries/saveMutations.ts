import { gql } from '@apollo/client';

export const SAVE_TRACK = gql`
	mutation saveTrack($id: String!) {
		saveTracks(ids: $id)
	}
`;

export const REMOVE_TRACK = gql`
	mutation removeTrack($id: String!) {
		removeSavedTracks(ids: $id)
	}
`;

export const SAVE_ALBUM = gql`
	mutation saveAlbum($id: String!) {
		saveAlbums(ids: $id)
	}
`;

export const REMOVE_ALBUM = gql`
	mutation removeAlbum($id: String!) {
		removeSavedAlbums(ids: $id)
	}
`;

export const SAVE_SHOW = gql`
	mutation saveShow($id: String!) {
		saveShows(ids: $id)
	}
`;

export const REMOVE_SHOW = gql`
	mutation removeShow($id: String!) {
		removeSavedShows(ids: $id)
	}
`;
