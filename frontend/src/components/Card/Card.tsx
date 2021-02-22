import React, { useState } from 'react';
import { HeartOutlinedIcon, HorizontalDotsIcon, PlayIcon } from '../Icons/Icons';

interface CardInterface {
	image: string;
	header: string;
	text: string;
}

export const Card: React.FC<CardInterface> = props => {
	const [buttons, showButtons] = useState('invisible');
	return (
		<div className="mr-5">
			<div
				className="flex transition ease-in-out relative cursor-pointer" // hover:opacity-30
				onMouseEnter={() => showButtons('visible')}
				onMouseLeave={() => showButtons('invisible')}
			>
				<img src={props.image} />
				<div
					className={`flex absolute left-14 mr-16 top-20 ${buttons} cursor-default`}
				>
					<HeartOutlinedIcon className="w-10 h-10 text-black mt-5" />
					<PlayIcon className="w-20 h-20 text-black" />
					<HorizontalDotsIcon className="w-10 h-10 mt-5 text-black" />
				</div>
			</div>

			<div className="mt-2">
				<h1 className="cursor-pointer">
					{props.header.length >= 25
						? props.header.substring(0, 25) + '...'
						: props.header}
				</h1>
				<h2 className="cursor-pointer font-medium text-sm text-gray-400">
					{props.text}
				</h2>
			</div>
		</div>
	);
};
