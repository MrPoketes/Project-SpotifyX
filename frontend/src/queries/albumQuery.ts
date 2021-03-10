import { gql } from '@apollo/client';

export const GET_ALBUM = gql`
	query getAlbum($id: String!) {
		getAlbum(id: $id) {
			artists {
				name
			}
			release_date
			id
			name
			album_type
			images {
				url
			}
			tracks {
				duration_ms
				id
				name
				uri
			}
		}
	}
`;
