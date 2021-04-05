import React from 'react';

export const Scroller: React.FC = ({ children }) => {
	return <div className="overflow-auto mx-0 my-auto h-80 scroll">{children}</div>;
};
