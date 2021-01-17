const { gql } = require('apollo-server-express');

const RecommendationSeed = gql`
	type RecommendationSeed {
		afterFilteringSize: Int
		afterRelinkingSize: Int
		href: String
		id: String
		initialPoolSize: Int
		type: String
	}
`;
module.exports = RecommendationSeed;
