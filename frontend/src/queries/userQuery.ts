import { gql } from '@apollo/client';

export const GET_ME_DATA = gql`
	query getMeData {
		getMe {
			display_name
			images {
				url
			}
			id
			type
		}
	}
`;
