import { gql } from 'apollo-server-express';

const Device = gql`
	type Device {
		id: String
		is_active: Boolean
		is_private_session: Boolean
		is_restricted: Boolean
		name: String
		type: String
		volume_percent: Int
	}
`;
export default Device;
