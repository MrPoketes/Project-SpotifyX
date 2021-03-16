import { gql } from 'apollo-server-express';

const Copyright = gql`
	type Copyright {
		text: String
		type: String
	}
`;
export default Copyright;
