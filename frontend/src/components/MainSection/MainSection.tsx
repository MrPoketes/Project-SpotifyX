import React from 'react';

export const MainSection: React.FC<any> = props => {
	return (
		<div className="mt-20">
			<h1 className="text-5xl font-bold">{props.header}</h1>
			{props.children}
		</div>
	);
};
