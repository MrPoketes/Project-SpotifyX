const { gql } = require('apollo-server-express');

const Episode = gql`
	type Episode {
		audio_preview_url: String
		description: String
		duration_ms: Int
		explicit: Boolean
		external_urls: ExternalUrls
		href: String
		id: String
		images: [Image]
		is_externally_hosted: Boolean
		is_playable: Boolean
		language: String
		languages: [String]
		name: String
		release_date: String
		release_date_precision: String
		resume_point: ResumePoint
		show: Show
		type: String
		uri: String
	}
`;
module.exports = Episode;
