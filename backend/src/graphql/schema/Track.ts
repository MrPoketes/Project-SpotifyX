import { gql } from 'apollo-server-express';

const Track = gql`
	type Track {
		album: Album
		artists: [Artist]
		available_markets: [String]
		disc_number: Int
		duration_ms: Int
		explicit: Boolean
		external_ids: ExternalIds
		href: String
		id: String
		is_local: Boolean
		is_playable: Boolean
		name: String
		popularity: Int
		preview_url: String
		track_number: Int
		type: String
		uri: String
	}
`;
export default Track;
