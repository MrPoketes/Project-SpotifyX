import React from 'react';
import { SectionInterface } from './SectionInterfaces';

export const Section: React.FC<SectionInterface> = ({ children, title, flex }) => {
	return (
		<div className="mt-10 font-semibold text-lg">
			<div className={flex ? '' : 'flex'}>
				<h2 className="mb-2">{title}</h2>
			</div>

			<hr />
			<div className={flex ? 'flex mt-8' : 'mt-8'}>{children}</div>
		</div>
	);
};
