const { gql } = require('apollo-server-express');

const Cursor = gql`
	type Cursor {
		after: String
	}
`;
module.exports = Cursor;
