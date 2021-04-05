import React from 'react';
import { HeaderInterface } from './HeaderInterfaces';

export const Header: React.FC<HeaderInterface> = props => {
	return (
		<div className="flex">
			<img className="h-56 w-56" src={props.image} />
			<div className="mt-6 ml-6 text-left">
				<h1 className="text-gray-200 font-bold text-lg uppercase">
					{props.title}
				</h1>
				<h1 className="text-5xl mt-2">{props.name}</h1>
				{props.children}
			</div>
		</div>
	);
};
