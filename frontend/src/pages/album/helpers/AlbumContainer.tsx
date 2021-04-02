import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALBUM_TRACKS } from '../../../queries/songQuery';
import {
	ClockIcon,
	HorizontalDotsIcon,
	PlayIcon,
	ThumbsUpIcon
} from '../../../components/Icons/Icons';
import { TrackList } from '../../../components/TrackList/TrackList';
import { FollowCheck } from './FollowCheck';

interface AlbumContainer {
	image: string;
	name: string;
	releaseDate: string;
	uri: string;
	id: string;
}

export const AlbumContainer: React.FC<AlbumContainer> = props => {
	const { data } = useQuery(GET_ALBUM_TRACKS, {
		variables: { id: props.id }
	});

	const columns = ['#', 'Title', <ClockIcon />, <ThumbsUpIcon />];
	return (
		<div className="block mb-10">
			<div className="flex">
				<div className="flex relative hover-opacity">
					<img className="h-48 w-48" src={props.image} />
					<div className="flex absolute cursor-default h-1/2 w-full justify-center top-1/3 card-buttons">
						<button className="w-20 h-20 text-black">
							<PlayIcon className="w-20 h-20" />
						</button>
					</div>
				</div>
				<div className="ml-5">
					<h1 className="text-gray-200 font-normal">
						{props.releaseDate.substring(0, 4)}
					</h1>
					<h1 className="text-5xl mt-1">{props.name}</h1>
					<div className="mt-16 flex">
						<FollowCheck id={props.id} />
						<button>
							<HorizontalDotsIcon />
						</button>
					</div>
				</div>
			</div>
			{data && (
				<TrackList
					columns={columns}
					trackData={data.getAlbumTracks}
					type="track"
				/>
			)}
		</div>
	);
};
