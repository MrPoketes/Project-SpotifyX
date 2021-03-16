import { gql } from 'apollo-server-express';

const CurrentlyPlayingContext = gql`
	union CurrentlyPlayingItems = Track | Episode
	type CurrentlyPlayingContext {
		actions: Disallows
		context: Context
		currently_playing_type: String
		device: Device
		is_playing: Boolean
		item: CurrentlyPlayingItems
		progress_ms: Int
		repeat_state: String
		shuffle_state: String
		timestamp: Int
	}
`;
export default CurrentlyPlayingContext;
