const { gql } = require('apollo-server-express');

const PlaylistTrack = gql`
	union PlaylistTrackItems = Track | Episode
	type PlaylistTrack {
		added_at: String
		added_by: User
		is_local: PlaylistTrackItems
		track: Items
	}
`;
module.exports = PlaylistTrack;
