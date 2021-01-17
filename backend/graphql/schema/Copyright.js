const { gql } = require('apollo-server-express');

const Copyright = gql`
	type Copyright {
		text: String
		type: String
	}
`;
module.exports = Copyright;
