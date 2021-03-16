import { gql } from 'apollo-server-express';

const Cursor = gql`
	type Cursor {
		after: String
	}
`;
export default Cursor;
