import React from 'react';
import { HeartOutlinedIcon } from '../Icons/Icons';
import { PlayerSideTools } from './helpers/PlayerSideTools';
import { PlayerTools } from './helpers/PlayerTools';

export const Player: React.FC<any> = props => {
	return (
		<div className="bg-gray-700 w-full fixed bottom-0 h-28 text-white grid grid-cols-4 justify-between">
			<div className="ml-6 mt-6 flex">
				<img
					className="w-16 h-16"
					src="https://i.scdn.co/image/ab67616d0000b27325e1a02097987b3480c7a8c5"
				/>
				<div className="ml-2">
					<div className="flex">
						<h1>Song title</h1>
						<button className="ml-2">
							<HeartOutlinedIcon />
						</button>
					</div>

					<h1>Artist name</h1>
				</div>
			</div>
			<div className="col-span-2">
				<PlayerTools />
			</div>
			<PlayerSideTools />
		</div>
	);
};
