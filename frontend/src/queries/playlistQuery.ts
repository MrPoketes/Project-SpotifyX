import { gql } from '@apollo/client';

export const GET_ME_PLAYLISTS = gql`
	query mePlaylists {
		getCurrentUserPlaylists {
			name
			id
			uri
		}
	}
`;

export const GET_PLAYLIST = gql`
	query playlist($id: String!) {
		getPlaylist(id: $id) {
			description
			followers {
				total
			}
			id
			images {
				url
			}
			name
			owner {
				display_name
			}
			uri
			tracks {
				added_at
				track
			}
		}
	}
`;
