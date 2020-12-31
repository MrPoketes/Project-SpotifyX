import React from 'react';

export const Button: React.FC<any> = props => {
	return (
		<button className="block">
			<div className="flex justify-center items-center">{props.children}</div>
		</button>
	);
};
