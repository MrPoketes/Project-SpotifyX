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

export const FOLLOW_PLAYLIST = gql`
	mutation followPlaylist($id: String!) {
		followPlaylist(id: $id)
	}
`;

export const UNFOLLOW_PLAYLIST = gql`
	mutation unfollowPlaylist($id: String!) {
		unfollowPlaylist(id: $id)
	}
`;
