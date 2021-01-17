const { gql } = require('apollo-server-express');

const Paging = gql`
	type Paging {
		href: String
		limit: Int
		next: String
		offset: Int
		previous: String
		total: Int
	}
`;
module.exports = Paging;
