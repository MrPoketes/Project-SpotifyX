import React from 'react';
import { SideMenu } from '../SideMenu/SideMenu';
import { TopNavigation } from '../TopNavigation/TopNavigation';

export const Layout: React.FC<any> = props => {
	return (
		<div>
			<SideMenu />
			<div className="text-white" style={{ marginLeft: '10%' }}>
				<TopNavigation />
				{props.children}
			</div>
		</div>
	);
};
