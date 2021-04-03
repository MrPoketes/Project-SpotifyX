import { gql } from '@apollo/client';

export const GET_SHOW = gql`
	query getShow($id: String!) {
		getShow(id: $id) {
			name
			images {
				url
			}
			publisher
			uri
			id
			description
			episodes {
				id
				uri
				name
				release_date
				duration_ms
				description
			}
		}
	}
`;
