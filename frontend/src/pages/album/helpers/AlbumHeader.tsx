import React from 'react';
import { Button } from '../../../components/Button/Button';
import { formatArtistNames } from '../../../utilities/formatArtistNames';
import { FollowCheck } from './FollowCheck';

interface AlbumHeaderInterface {
	image: string;
	id: string;
	type: string;
	releaseDate: string;
	name: string;
	owner: [
		{
			name: string;
		}
	];
}

export const AlbumHeader: React.FC<AlbumHeaderInterface> = props => {
	return (
		<div className="block mb-10">
			<div className="flex">
				<img className="h-56 w-56" src={props.image} />
				<div className="ml-5 mt-8">
					<h1 className="text-gray-200 font-normal uppercase">
						{props.type}
					</h1>
					<h1 className="text-5xl mt-1">{props.name}</h1>
					<h1 className="text-gray-200 font-normal mt-3">
						By {formatArtistNames(props.owner, props.owner.length)}
					</h1>
					<h1 className="text-gray-200 font-normal my-1 mb-3">
						{props.releaseDate}
					</h1>
					<div className="text-black flex">
						<Button className="bg-green-500 mr-2">Play</Button>
						<FollowCheck id={props.id} />
						<Button circle className="bg-gray-700 border border-white">
							...
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
