import { gql } from 'apollo-server-express';

const Error = gql`
	type Error {
		message: String
		status: Int
	}
`;
export default Error;
