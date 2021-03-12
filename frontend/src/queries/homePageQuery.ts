import { gql } from '@apollo/client';

export const GET_RECENTLY_PLAYED = gql`
	query getRecentlyPlayed {
		getRecentlyPlayed {
			track {
				href
				name
				uri
				album {
					id
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

export const GET_TOP_ARTISTS_OR_TRACKS = gql`
	query topArtistsTracks($type: String!) {
		getTopArtistsTracks(type: $type)
	}
`;
