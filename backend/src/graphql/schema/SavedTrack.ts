import { gql } from 'apollo-server-express';

const SavedTrack = gql`
	type SavedTrack {
		added_at: String
		track: Track
	}
`;
export default SavedTrack;
