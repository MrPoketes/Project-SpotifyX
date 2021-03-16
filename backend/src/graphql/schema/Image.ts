import { gql } from 'apollo-server-express';

const Image = gql`
	type Image {
		height: Int
		url: String
		width: Int
	}
`;
export default Image;
