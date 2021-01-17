const { gql } = require('apollo-server-express');

const PlaylistTracksRef = gql`
	type PlaylistTracksRef {
		href: String
		totat: Int
	}
`;
module.exports = PlaylistTracksRef;
