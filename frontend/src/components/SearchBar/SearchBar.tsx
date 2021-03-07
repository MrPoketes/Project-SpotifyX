import React from 'react';

export const SearchBar: React.FC<any> = props => {
	return (
		<div className="text-black ml-5 mt-2">
			<input
				className="pl-2 rounded-full py-1 focus:outline-none focus:ring-4 transition ease-in-out"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
