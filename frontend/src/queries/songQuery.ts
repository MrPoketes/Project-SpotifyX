import { gql } from '@apollo/client';

export const GET_ARTIST_ALBUMS = gql`
	query artistAlbums($id: String!) {
		getArtistAlbums(id: $id) {
			uri
			id
			name
			release_date
			images {
				url
			}
		}
	}
`;

export const GET_ALBUM_TRACKS = gql`
	query tracks($id: String!) {
		getAlbumTracks(id: $id) {
			id
			uri
			name
			explicit
			duration_ms
		}
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
