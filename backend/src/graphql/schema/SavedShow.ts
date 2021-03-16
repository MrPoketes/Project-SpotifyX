import { gql } from 'apollo-server-express';

const SavedShow = gql`
	type SavedShow {
		added_at: String
		show: Show
	}
`;
export default SavedShow;
