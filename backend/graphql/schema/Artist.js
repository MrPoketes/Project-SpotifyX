const { gql } = require('apollo-server-express');

const Artist = gql`
	type Artist {
		external_urls: ExternalUrls
		followers: Followers
		genres: [String]
		href: String
		id: String
		images: [Image]
		name: String
		popularity: Int
		type: String
		uri: String
	}
`;
module.exports = Artist;
