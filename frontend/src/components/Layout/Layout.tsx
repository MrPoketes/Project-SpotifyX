import React from 'react';
import { SideMenu } from '../SideMenu/SideMenu';
import { TopNavigation } from '../TopNavigation/TopNavigation';

export const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<SideMenu />
			<div className="text-white" style={{ marginLeft: '11%' }}>
				<TopNavigation />
				{children}
			</div>
		</div>
	);
};
