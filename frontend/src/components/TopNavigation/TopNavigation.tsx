import React from 'react';
import { LeftIcon, RightIcon, DownIcon } from '../Icons/Icons';
import { SearchBar } from '../SearchBar/SearchBar';

interface TopNavigationInterface {
	displayName: string;
	image: string;
}

export const TopNavigation: React.FC<TopNavigationInterface> = props => {
	return (
		<div className="flex sticky top-0  bg-gray-800 py-3 z-50">
			<>
				<div className="flex">
					<LeftIcon className="mr-4" />
					<RightIcon />
				</div>
				<SearchBar />
				<div className="w-full flex justify-end pr-8">
					<img className="rounded-full w-8 h-8 mr-3" src={props.image} />
					<h1 className="mr-4 hover:underline cursor-default">
						{props.displayName}
					</h1>
					{/* TODO: Add a handleClick and add tooltip when clicked */}
					<DownIcon />
				</div>
			</>
		</div>
	);
};
