import { gql } from 'apollo-server-express';

const Disallows = gql`
	type Disallows {
		interrupting_playback: Boolean
		pausing: Boolean
		resuming: Boolean
		seeking: Boolean
		skipping_next: Boolean
		skipping_prev: Boolean
		toggling_repeat_context: Boolean
		toggling_repeat_track: Boolean
		toggling_shuffle: Boolean
		transferring_playback: Boolean
	}
`;
export default Disallows;
