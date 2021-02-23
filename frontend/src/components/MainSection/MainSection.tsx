import React from 'react';

interface MainSectionInterface {
	header: string;
}
export const MainSection: React.FC<MainSectionInterface> = ({ children, header }) => {
	return (
		<div className="mt-20">
			<h1 className="text-5xl font-bold">{header}</h1>
			{children}
		</div>
	);
};
