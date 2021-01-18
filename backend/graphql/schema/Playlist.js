const { gql } = require('apollo-server-express');

const Playlist = gql`
	type Playlist {
		collaborative: Boolean
		description: String
		external_urls: ExternalUrls
		followers: Followers
		href: String
		id: String
		images: [Image]
		name: String
		owner: User
		public: Boolean
		snapshot_id: String
		tracks: [PlaylistTrack]
		type: String
		uri: String
	}
`;
module.exports = Playlist;
