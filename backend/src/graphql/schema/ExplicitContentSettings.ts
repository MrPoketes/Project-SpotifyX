import { gql } from 'apollo-server-express';

const ExplicitContentSettings = gql`
	type ExplicitContentSettings {
		filter_enabled: Boolean
		filter_locked: Boolean
	}
`;
export default ExplicitContentSettings;
