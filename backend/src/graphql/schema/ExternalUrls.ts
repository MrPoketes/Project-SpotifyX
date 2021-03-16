import { gql } from 'apollo-server-express';

const ExternalUrls = gql`
	type ExternalUrls {
		spotify: String
	}
`;
export default ExternalUrls;
