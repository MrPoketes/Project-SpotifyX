import React from 'react';

export const Layout: React.FC = ({ children }) => {
	return (
		<div className="text-white mt-8" style={{ marginLeft: '10%' }}>
			{children}
		</div>
	);
};
