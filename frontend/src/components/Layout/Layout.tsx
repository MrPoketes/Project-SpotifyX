import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_ME_DATA } from '../../queries/userQuery';
import { SideMenu } from '../SideMenu/SideMenu';
import { TopNavigation } from '../TopNavigation/TopNavigation';

export const Layout: React.FC = ({ children }) => {
	const { data } = useQuery(GET_ME_DATA);
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			{data && (
				<div id="outer-container">
					<SideMenu
						id={data.getMe.id}
						open={open}
						handleBurgerClick={() => handleClick()}
					/>
					<div id="page-wrap" className="text-white">
						<TopNavigation
							handleBurgerClick={() => handleClick()}
							image={data.getMe.images[0].url}
							displayName={data.getMe.display_name}
						/>
						<div className="mx-5">{children}</div>
					</div>
				</div>
			)}
		</>
	);
};
