import { gql } from 'apollo-server-express';

const Category = gql`
	type Category {
		href: String
		icons: [Image]
		id: String
		name: String
		items: [Category]
	}
`;
export default Category;
