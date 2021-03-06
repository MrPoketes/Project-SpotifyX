import { gql } from '@apollo/client';

export const GET_ARTIST = gql`
	query artist($id: String!) {
		getArtist(id: $id) {
			name
			uri
			images {
				url
			}
			followers {
				total
			}
		}
	}
`;

export const CHECK_FOLLOWS_ARTIST = gql`
	query followsArtist($id: String!) {
		checkIfUserFollows(type: "artist", id: $id)
	}
`;
