import React from 'react';
import { DownIcon } from '../Icons/Icons';
import { SearchBar } from '../SearchBar/SearchBar';
import { RouterButtons } from './helpers/RouterButtons';
import { TopNavigationInterface } from './TopNavigationInterfaces';

export const TopNavigation: React.FC<TopNavigationInterface> = props => {
	return (
		<div className="flex sticky top-0  bg-trueGray-800 py-3 z-50">
			<>
				<div className="flex">
					<RouterButtons
						handleBurgerClick={() => props.handleBurgerClick()}
					/>
				</div>
				<SearchBar />
				<div className="w-full flex justify-end pr-8 mt-2">
					<img className="rounded-full w-8 h-8 mr-3" src={props.image} />
					<h1 className="mr-4 hover:underline cursor-default">
						{props.displayName}
					</h1>
					<DownIcon />
				</div>
			</>
		</div>
	);
};
