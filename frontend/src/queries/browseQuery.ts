import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
	query getCategories($country: String!) {
		getAllCategories(country: $country) {
			id
			icons {
				url
			}
			name
		}
	}
`;

export const GET_CATEGORY_PLAYLISTS = gql`
	query getCategoryPlaylists($id: String!, $country: String!) {
		getCategoryPlaylists(id: $id, country: $country) {
			name
			id
			uri
			images {
				url
			}
		}
	}
`;
