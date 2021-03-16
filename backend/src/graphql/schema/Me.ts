import { gql } from 'apollo-server-express';

const Me = gql`
	type Me {
		country: String
		display_name: String
		email: String
		explicit_content: ExplicitContentSettings
		external_urls: ExternalUrls
		followers: Followers
		href: String
		id: String
		images: [Image]
		product: String
		type: String
		uri: String
	}
`;
export default Me;
