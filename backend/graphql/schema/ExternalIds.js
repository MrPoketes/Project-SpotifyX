const { gql } = require('apollo-server-express');

const ExternalIds = gql`
	type ExternalIds {
		ean: String
		isrc: String
		upc: String
	}
`;
module.exports = ExternalIds;
