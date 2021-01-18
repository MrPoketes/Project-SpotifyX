const { gql } = require('apollo-server-express');

const Show = gql`
	type Show {
		available_markets: [String]
		copyrights: [Copyright]
		description: String
		episodes: [Episode]
		explicit: Boolean
		external_urls: ExternalUrls
		href: String
		id: String
		images: [Image]
		is_externally_hosted: Boolean
		languages: [String]
		media_type: String
		name: String
		publisher: String
		type: String
		uri: String
	}
`;
module.exports = Show;
