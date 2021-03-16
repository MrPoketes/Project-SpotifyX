import { gql } from 'apollo-server-express';

const AudioFeatures = gql`
	type AudioFeatures {
		acousticness: Float
		analysis_url: String
		danceability: Float
		duration_ms: Int
		energy: Float
		id: String
		instrumentalness: Float
		key: Int
		liveness: Float
		loudness: Float
		mode: Int
		speechiness: Float
		tempo: Float
		time_signature: Int
		track_href: String
		type: String
		uri: String
		valence: Float
	}
`;
export default AudioFeatures;
