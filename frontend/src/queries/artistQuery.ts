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
