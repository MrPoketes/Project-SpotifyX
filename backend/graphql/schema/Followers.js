const { gql } = require('apollo-server-express');

const Followers = gql`
	type Followers {
		href: String
		total: Int
	}
`;

module.exports = Followers;
