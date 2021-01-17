const { gql } = require('apollo-server-express');

const Category = gql`
	type Category {
		href: String
		icons: [Image]
		id: String
		name: String
	}
`;
module.exports = Category;
