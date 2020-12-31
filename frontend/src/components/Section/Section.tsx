import React from 'react';

export const Section: React.FC<any> = props => {
	return (
		<div className="mt-10 font-semibold text-lg">
			<h2 className="mb-2">{props.title}</h2>
			<hr />
			<div>{props.children}</div>
		</div>
	);
};
