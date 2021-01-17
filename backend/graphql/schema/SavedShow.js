const { gql } = require('apollo-server-express');

const SavedShow = gql`
	type SavedShow {
		added_at: String
		show: Show
	}
`;
module.exports = SavedShow;
