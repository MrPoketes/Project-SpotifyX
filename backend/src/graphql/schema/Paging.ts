import { gql } from 'apollo-server-express';

const Paging = gql`
	type Paging {
		href: String
		limit: Int
		next: String
		offset: Int
		previous: String
		total: Int
	}
`;
export default Paging;
