import { gql } from 'apollo-server-express';

const SavedAlbum = gql`
	type SavedAlbum {
		added_at: String
		album: Album
	}
`;
export default SavedAlbum;
