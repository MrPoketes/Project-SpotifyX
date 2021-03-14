import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALBUM_TRACKS } from '../../../queries/songQuery';
import {
	ClockIcon,
	HorizontalDotsIcon,
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
	const { loading, error, data } = useQuery(GET_ALBUM_TRACKS, {
		variables: { id: props.id }
	});

	const columns = ['#', 'Title', <ClockIcon />, <ThumbsUpIcon />];
	return (
		<div className="block mb-10">
			<div className="flex">
				<img className="h-48 w-48" src={props.image} />
				<div className="ml-5">
					<h1 className="text-gray-200 font-normal">
						{props.releaseDate.substring(0, 4)}
					</h1>
					<h1 className="text-5xl mt-1">{props.name}</h1>
					<div className="mt-20 flex">
						<button className="mr-3">
							<FollowCheck id={props.id} />
						</button>
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
