import { gql } from 'apollo-server-express';

const PlayHistory = gql`
	type PlayHistory {
		context: Context
		played_at: String
		track: Track
	}
`;
export default PlayHistory;
