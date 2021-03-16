import { gql } from 'apollo-server-express';

const PlaylistTracksRef = gql`
	type PlaylistTracksRef {
		href: String
		totat: Int
	}
`;
export default PlaylistTracksRef;
