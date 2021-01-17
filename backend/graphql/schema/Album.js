const { gql } = require('apollo-server-express');

const Album = gql`
	type Album {
		album_type: String
		artists: [Artist]
		available_markets: [String]
		copyrights: [Copyrights]
		external_ids: ExternalIds
		external_urls: ExternalUrls
		genres: [String]
		href: String
		id: String
		images: [Image]
		label: String
		name: String
		popularity: Int
		release_data: String
		release_date_precision: String
		tracks: [Track]
		type: String
		uri: String
	}
`;
module.exports = Album;
