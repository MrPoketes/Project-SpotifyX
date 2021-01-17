const { gql } = require('apollo-server-express');

const ResumePoint = gql`
	type ResumePoint {
		fully_played: Boolean
		resume_position_ms: Int
	}
`;
module.exports = ResumePoint;
