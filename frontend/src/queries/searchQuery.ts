import { gql } from '@apollo/client';

export const SEARCH = gql`
	query search($query: String!) {
		search(query: $query) {
			albums {
				images {
					url
				}
				artists {
					name
				}
				name
				id
				uri
			}
			artists {
				id
				uri
				name
				images {
					url
				}
			}
			tracks {
				id
				uri
				name
				artists {
					name
				}
				album {
					id
					images {
						url
					}
				}
			}
			playlists {
				name
				id
				uri
				images {
					url
				}
			}
			shows {
				name
				id
				uri
				images {
					url
				}
			}
		}
	}
`;
