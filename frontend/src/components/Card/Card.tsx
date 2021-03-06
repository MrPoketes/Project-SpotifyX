import React from 'react';
import { HorizontalDotsIcon, PlayIcon } from '../Icons/Icons';
import { CardInterface } from './CardInterfaces';
import { FollowingButton } from './helpers/FollowingButton';

export const Card: React.FC<CardInterface> = props => {
	return (
		<div className="mr-5">
			<div className="flex relative cursor-pointer hover-opacity">
				<img
					src={props.image}
					className={
						props.isArtist
							? 'rounded-full transition ease-in-out w-80 h-80'
							: 'transition ease-in-out w-80 h-80'
					}
				/>
				{props.showControls && props.type !== undefined && (
					<div className="flex absolute cursor-default h-1/2 w-full justify-center top-1/3 card-buttons">
						<FollowingButton id={props.id} type={props.type} />
						<button className="w-20 h-20 text-black">
							<PlayIcon className="w-20 h-20" />
						</button>
						<button className="w-10 h-10 mt-5 text-black">
							<HorizontalDotsIcon className="w-10 h-10" />
						</button>
					</div>
				)}
			</div>

			<div className="mt-2 text-center">
				<button className="font-bold">
					<h1 className="cursor-pointer">
						{props.header.length >= 25
							? props.header.substring(0, 25) + '...'
							: props.header}
					</h1>
				</button>
			</div>
			{props.artistText && (
				<div className="cursor-pointer font-medium text-sm text-gray-400 flex justify-center">
					{props.artistText}
				</div>
			)}
			{props.children}
		</div>
	);
};
