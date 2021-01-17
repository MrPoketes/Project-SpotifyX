const { gql } = require('apollo-server-express');

const Image = gql`
	type Image {
		height: Int
		url: String
		width: Int
	}
`;
module.exports = Image;
