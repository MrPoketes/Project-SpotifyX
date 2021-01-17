const { gql } = require('apollo-server-express');

const PlayerError = gql`
	type PlayerError {
		message: String
		status: Int
	}
`;
module.exports = PlayerError;
