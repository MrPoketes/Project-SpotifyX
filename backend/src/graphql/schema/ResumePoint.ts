import { gql } from 'apollo-server-express';

const ResumePoint = gql`
	type ResumePoint {
		fully_played: Boolean
		resume_position_ms: Int
	}
`;
export default ResumePoint;
