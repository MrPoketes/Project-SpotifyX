const { gql } = require('apollo-server-express');

const Context = gql`
	type Context {
		external_urls: ExternalUrls
		href: String
		type: String
		uri: String
	}
`;
module.exports = Context;
