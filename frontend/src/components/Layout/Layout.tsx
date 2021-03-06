import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ME_DATA } from '../../queries/userQuery';
import { SideMenu } from '../SideMenu/SideMenu';
import { TopNavigation } from '../TopNavigation/TopNavigation';

export const Layout: React.FC = ({ children }) => {
	const { loading, error, data } = useQuery(GET_ME_DATA);

	return (
		<div>
			{data && (
				<>
					<SideMenu id={data.getMe.id} />
					<div className="text-white" style={{ marginLeft: '11%' }}>
						<TopNavigation
							image={data.getMe.images[0].url}
							displayName={data.getMe.display_name}
						/>
						{children}
					</div>
				</>
			)}
		</div>
	);
};
