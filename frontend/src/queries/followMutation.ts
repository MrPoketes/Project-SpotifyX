import { gql } from '@apollo/client';

export const FOLLOW_ARTIST_USER = gql`
	mutation follow($id: String!, $type: String!) {
		followArtistsUsers(ids: $id, type: $type)
	}
`;

export const UNFOLLOW_ARTIST_USER = gql`
	mutation unfollow($id: String!, $type: String!) {
		unfollowArtistsUsers(ids: $id, type: $type)
	}
`;
