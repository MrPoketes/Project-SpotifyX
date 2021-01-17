const { gql } = require('apollo-server-express');

const AudioFeatures = gql`
	type AudioFeatures {
		acousticness: Float
		analysis_url: String
		danceability: Float
		duration_ms: Int
		energy: Float
		id: String
		instrumentalness: Float
		key: Integer
		liveness: Float
		loudness: Float
		mode: Integer
		speechiness: Float
		tempo: Float
		time_signature: Int
		track_href: String
		type: String
		uri: String
		valence: Float
	}
`;
module.exports = AudioFeatures;
