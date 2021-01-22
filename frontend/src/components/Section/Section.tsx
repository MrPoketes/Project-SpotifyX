import React from 'react';
import { LeftIcon, RightIcon } from '../Icons/Icons';

export const Section: React.FC<any> = props => {
	return (
		<div className="mt-10 font-semibold text-lg">
			<div className="flex">
				<h2 className="mb-2">{props.title}</h2>
			</div>

			<hr />
			<div className="mt-8 flex">{props.children}</div>
		</div>
	);
};
