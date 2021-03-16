import { gql } from 'apollo-server-express';

const ExternalIds = gql`
	type ExternalIds {
		ean: String
		isrc: String
		upc: String
	}
`;
export default ExternalIds;
