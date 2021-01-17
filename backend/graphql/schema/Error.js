const { gql } = require('apollo-server-express');

const Error = gql`
	type Error {
		message: String
		status: Int
	}
`;
module.exports = Error;
