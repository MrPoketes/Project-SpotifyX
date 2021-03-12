import { gql } from '@apollo/client';

export const GET_SAVED_TRACKS = gql`
	query getSavedTracks {
		getSavedTracks {
			added_at
			track {
				album {
					id
					name
				}
				id
				uri
				name
				duration_ms
				artists {
					id
					name
				}
			}
		}
	}
`;

export const GET_SAVED_ALBUMS = gql`
	query getSavedAlbums {
		getSavedAlbums {
			album {
				artists {
					name
					id
				}
				id
				images {
					url
				}
				name
				uri
			}
		}
	}
`;
export const GET_SAVED_ARTISTS = gql`
	query getSavedArtists {
		getFollowedArtists(type: "artist") {
			id
			name
			images {
				url
			}
			uri
		}
	}
`;
