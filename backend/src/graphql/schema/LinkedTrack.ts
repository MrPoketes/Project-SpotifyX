import { gql } from 'apollo-server-express';

const LinkedTrack = gql`
	type LinkedTrack {
		external_urls: ExternalUrls
		href: String
		id: String
		type: String
		uri: String
	}
`;
export default LinkedTrack;
