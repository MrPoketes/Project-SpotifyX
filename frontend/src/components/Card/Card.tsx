import React, { useState } from 'react';
import { HeartOutlinedIcon, HorizontalDotsIcon, PlayIcon } from '../Icons/Icons';

export const Card: React.FC<any> = props => {
	const [buttons, showButtons] = useState('invisible');
	return (
		<div className="mr-5">
			<div
				className="flex transition ease-in-out relative hover:opacity-30 cursor-pointer"
				onMouseEnter={() => showButtons('visible')}
				onMouseLeave={() => showButtons('invisible')}
			>
				<img src={props.image} />
				<div
					className={`flex absolute right-0 mr-16 top-20 ${buttons} cursor-default`}
				>
					<HeartOutlinedIcon className="w-10 h-10 text-black mt-4" />
					<PlayIcon className="w-20 h-20 text-black" />
					<HorizontalDotsIcon className="w-10 h-10 text-black mt-4" />
				</div>
			</div>

			<div className="mt-2">
				<h1 className="hover:underline cursor-pointer">{props.header}</h1>
				<h2 className="font-medium text-sm text-gray-400">{props.text}</h2>
			</div>
		</div>
	);
};
