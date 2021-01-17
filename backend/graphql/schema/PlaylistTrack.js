const { gql } = require('apollo-server-express');

const PlaylistTrack = gql`
	type PlaylistTrack {
		added_at: String
		added_by: User
		is_local: Boolean
		track: Track | Episode
	}
`;
module.exports = PlaylistTrack;
