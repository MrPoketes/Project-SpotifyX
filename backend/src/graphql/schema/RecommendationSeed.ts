import { gql } from 'apollo-server-express';

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
export default RecommendationSeed;
