const { gql } = require('apollo-server-express');

const PlayHistory = gql`
	type PlayHistory {
		context: Context
		played_at: String
		track: Track
	}
`;
module.exports = PlayHistory;
