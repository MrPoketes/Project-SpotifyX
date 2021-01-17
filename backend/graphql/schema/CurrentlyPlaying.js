const { gql } = require('apollo-server-express');

const CurrentlyPlaying = gql`
	type CurrentlyPlaying {
		context: Context
		currently_playing_type: String
		is_playing: Boolean
		item: Track | Episode
        timestamp:Int
	}
`;
module.exports = CurrentlyPlaying;
