import React from 'react';
import { Button } from '../../../components/Button/Button';
import {
	ClockIcon,
	HorizontalDotsIcon,
	ThumbsUpIcon
} from '../../../components/Icons/Icons';
import { TrackList } from '../../../components/TrackList/TrackList';

interface PlaylistContainerInterface {
	image: string;
	name: string;
	owner: string;
	description: string;
	tracksData: [{ added_at: string; track: string }];
}

export const PlaylistContainer: React.FC<PlaylistContainerInterface> = props => {
	const columns = [
		'#',
		'Title',
		'Artist',
		'Album',
		'Date',
		<ClockIcon />,
		<ThumbsUpIcon />
	];
	const trackJson = props.tracksData.reduce((tracks, track) => {
		return [...tracks, { ...JSON.parse(track.track), releaseDate: track.added_at }];
	}, []);

	return (
		<div className="block mb-10">
			<div className="flex">
				<img className="h-56 w-56" src={props.image} />
				<div className="ml-5 mt-8">
					<h1 className="text-gray-200 font-normal">Playlist</h1>
					<h1 className="text-5xl mt-1">{props.name}</h1>
					<h1 className="text-gray-200 font-normal mt-3">
						{props.description}
					</h1>
					<h1 className="text-gray-200 font-normal my-1 mb-3">
						Created by {props.owner}
					</h1>
					<div className="text-black flex">
						<Button
							className="bg-green-500 mr-2"
							disabled={trackJson.length === 0}
						>
							Play
						</Button>
						<Button circle className="bg-gray-700 border border-white">
							...
						</Button>
					</div>
				</div>
			</div>
			{trackJson.length > 0 ? (
				<TrackList trackData={trackJson} type="playlist" columns={columns} />
			) : (
				<h1 className="text-center mt-8 text-4xl">
					This playlist is currently empty
				</h1>
			)}
		</div>
	);
};
