const { gql } = require('apollo-server-express');

const Recommendations = gql`
	type Recommendations {
		seeds: [RecommendationSeed]
		tracks: [Track]
	}
`;
module.exports = Recommendations;
