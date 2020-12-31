import React from 'react';

export const SearchBar: React.FC<any> = props => {
	return (
		<div className="text-black ml-5">
			<input
				className="pl-2 rounded-full py-1 focus:outline-none"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
