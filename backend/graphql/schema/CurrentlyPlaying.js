const { gql } = require('apollo-server-express');

const CurrentlyPlaying = gql`
	union Items = Track | Episode
	type CurrentlyPlaying {
		context: Context
		currently_playing_type: String
		is_playing: Boolean
		progress_ms: Int
		item: Items
		timestamp: Int
	}
`;
module.exports = CurrentlyPlaying;
