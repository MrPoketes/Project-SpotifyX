const { gql } = require('apollo-server-express');

const ExplicitContentSettings = gql`
	type ExplicitContentSettings {
		filter_enabled: Boolean
		filter_locked: Boolean
	}
`;
module.exports = ExplicitContentSettings;
