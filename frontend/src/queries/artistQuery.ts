import { gql } from '@apollo/client';

export const GET_ARTIST = gql`
	query artist($id: String!) {
		getArtist(id: $id) {
			id
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

export const GET_RELATED = gql`
	query getRelated($id: String!) {
		getArtistRelated(id: $id) {
			id
			name
			images {
				url
			}
		}
	}
`;
