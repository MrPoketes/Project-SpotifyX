import { gql } from 'apollo-server-express';

const TuneableTrack = gql`
	type TuneableTrack {
		acousticness: Float
		danceability: Float
		duration_ms: Int
		energy: Float
		instrumentalness: Float
		key: Int
		liveness: Float
		loudness: Float
		mode: Int
		popularity: Float
		speechiness: Float
		tempo: Float
		time_signature: Int
		valence: Float
	}
`;
export default TuneableTrack;
