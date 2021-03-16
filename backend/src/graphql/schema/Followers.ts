import { gql } from 'apollo-server-express';

const Followers = gql`
	type Followers {
		href: String
		total: Int
	}
`;

export default Followers;
