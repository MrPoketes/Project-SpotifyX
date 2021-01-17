const { gql } = require('apollo-server-express');

const User = gql`
	type User {
		display_name: String
		external_urls: ExternalUrls
		followers: Followers
		href: String
		id: String
		images: [Images]
		type: String
		uri: String
	}
`;
module.exports = User;
