const { gql } = require('apollo-server-express');

const SavedAlbum = gql`
	type SavedAlbum {
		added_at: String
		album: Album
	}
`;
module.exports = SavedAlbum;
