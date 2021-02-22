import React from 'react';
import { LeftIcon, RightIcon, DownIcon } from '../Icons/Icons';
import { SearchBar } from '../SearchBar/SearchBar';
import { useQuery } from '@apollo/client';
import { GET_ME_DATA } from '../../queries/userQuery';

export const TopNavigation: React.FC<any> = () => {
	const { loading, error, data } = useQuery(GET_ME_DATA);

	return (
		<div className="flex sticky top-0  bg-gray-800 py-3 z-50">
			{data !== undefined && (
				<>
					<div className="flex">
						<LeftIcon className="mr-4" />
						<RightIcon />
					</div>
					<SearchBar />
					<div className="w-full flex justify-end pr-8">
						<img
							className="rounded-full w-8 h-8 mr-3"
							src={data.getMe.images[0].url}
						/>
						<h1 className="mr-4 hover:underline cursor-default">
							{data.getMe.display_name}
						</h1>
						{/* TODO: Add a handleClick and add tooltip when clicked */}
						<DownIcon />
					</div>
				</>
			)}
		</div>
	);
};
