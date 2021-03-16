import { gql } from 'apollo-server-express';

const Recommendations = gql`
	type Recommendations {
		seeds: [RecommendationSeed]
		tracks: [Track]
	}
`;
export default Recommendations;
