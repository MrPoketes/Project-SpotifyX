import { gql } from 'apollo-server-express';

const PlayerError = gql`
	type PlayerError {
		message: String
		status: Int
	}
`;
export default PlayerError;
