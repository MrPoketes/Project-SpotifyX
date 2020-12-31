import React from 'react';

export const Button: React.FC<any> = props => {
	return (
		<button className="block w-full focus:outline-none p-3 text-gray-500 focus:text-white hover:text-white transition-colors ease-in-out">
			<div className="flex">{props.children}</div>
		</button>
	);
};
