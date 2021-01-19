const { gql } = require('apollo-server-express');

const SavedTrack = gql`
	type SavedTrack {
		added_at: String
		track: Track
	}
`;
module.exports = SavedTrack;
