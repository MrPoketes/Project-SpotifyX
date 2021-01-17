const { gql } = require('apollo-server-express');

const ExternalUrls = gql`
	type ExternalUrls {
		spotify: String
	}
`;
module.exports = ExternalUrls;
