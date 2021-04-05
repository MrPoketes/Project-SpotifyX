import React from 'react';
import { Button } from '../../../components/Button/Button';
import {
	ClockIcon,
	HorizontalDotsIcon,
	ThumbsUpIcon
} from '../../../components/Icons/Icons';
import { TrackList } from '../../../components/TrackList/TrackList';
import { PlaylistHeader } from './PlaylistHeader';

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
			<PlaylistHeader
				image={props.image}
				name={props.name}
				title="Playlist"
				description={props.description}
				owner={props.owner}
				disabled={trackJson.length === 0}
			/>
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
