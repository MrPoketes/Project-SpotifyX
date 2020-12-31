import React from 'react';
import { LeftIcon, RightIcon, DownIcon } from '../Icons/Icons';
import { SearchBar } from '../SearchBar/SearchBar';

export const TopNavigation: React.FC<any> = props => {
	return (
		<div className="mt-3 flex sticky top-0">
			<div className="flex">
				<LeftIcon className="mr-4" />
				<RightIcon />
			</div>
			<SearchBar />
			<div className="w-full flex justify-end pr-8">
				<h1 className="mr-4">UserName</h1>
				{/* TODO: Add a handleClick and add tooltip when clicked */}
				<DownIcon />
			</div>
		</div>
	);
};
