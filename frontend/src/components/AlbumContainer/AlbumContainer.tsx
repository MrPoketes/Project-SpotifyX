import { useQuery } from '@apollo/client';
import React from 'react';
import { CHECK_SAVED_ALBUMS, GET_ALBUM_TRACKS } from '../../queries/songQuery';
import { HeartOutlinedIcon, HeartSolidIcon, HorizontalDotsIcon } from '../Icons/Icons';
import { TrackList } from '../TrackList/TrackList';

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
	const {
		loading: loadingC,
		error: errorC,
		data: check
	} = useQuery(CHECK_SAVED_ALBUMS, { variables: { ids: props.id } });

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
						<button className="focus:outline-none mr-3">
							{check ? (
								<>
									{check.checkUsersSavedAlbums[0] ? (
										<HeartSolidIcon />
									) : (
										<HeartOutlinedIcon />
									)}
								</>
							) : (
								<HeartOutlinedIcon />
							)}
						</button>
						<button className="focus:outline-none">
							<HorizontalDotsIcon />
						</button>
					</div>
				</div>
			</div>
			{data && <TrackList trackData={data.getAlbumTracks} />}
		</div>
	);
};
