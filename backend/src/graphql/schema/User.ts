import { gql } from 'apollo-server-express';

const User = gql`
	type User {
		display_name: String
		external_urls: ExternalUrls
		followers: Followers
		href: String
		id: String
		images: [Image]
		type: String
		uri: String
	}
`;
export default User;
