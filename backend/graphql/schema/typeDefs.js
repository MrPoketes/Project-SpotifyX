const { gql } = require('apollo-server-express');
const Me = require('./Me');
const Followers = require('./Followers');
const Image = require('./Image');
const typeDefs = gql`
	type Query {
		me: Me
	}
`;
module.exports = [typeDefs, Me, Followers, Image];
