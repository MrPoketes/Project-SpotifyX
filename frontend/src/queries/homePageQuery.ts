import { gql } from '@apollo/client';

export const GET_RECENTLY_PLAYED = gql`
	query getRecentlyPlayed {
		getRecentlyPlayed {
			track {
				href
				name
				uri
				album {
					uri
					name
					images {
						url
					}
				}
				artists {
					name
					id
					images {
						url
					}
					followers {
						total
					}
				}
			}
		}
	}
`;

export const GET_ALL_CATEGORIES = gql`
	query getAllCategories {
		getAllCategories(country: "") {
			href
			icons {
				url
			}
			id
			name
		}
	}
`;
export const GET_NEW_RELEASES = gql`
	query getNewReleases {
		getNewReleases(country: "US") {
			artists {
				id
				name
				uri
			}
			uri
			id
			name
			images {
				url
			}
		}
	}
`;

export const GET_FEATURED_PLAYLISTS = gql`
	query featuredPlaylists($country: String) {
		getFeaturedPlaylists(country: $country) {
			name
			images {
				url
			}
			id
		}
	}
`;
