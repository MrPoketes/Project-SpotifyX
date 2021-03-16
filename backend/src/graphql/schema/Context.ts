import { gql } from 'apollo-server-express';

const Context = gql`
	type Context {
		external_urls: ExternalUrls
		href: String
		type: String
		uri: String
	}
`;
export default Context;
