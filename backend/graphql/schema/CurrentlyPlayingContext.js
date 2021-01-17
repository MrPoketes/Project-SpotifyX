const { gql } = require('apollo-server-express');

const CurrentlyPlayingContext = gql`
	type CurrentlyPlayingContext {
		actions: Disallows
		context: Context
		currently_playing_type: String
		device: Device
		is_playing: Boolean
		item: Track | Episode
        progress_ms:Int
        repeat_state:String
        shuffle_state:String
        timestamp:Int
	}
`;
module.exports = CurrentlyPlayingContext;
