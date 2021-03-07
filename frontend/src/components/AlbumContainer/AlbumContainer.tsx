import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { REMOVE_ALBUM, SAVE_ALBUM } from '../../queries/saveMutations';
import { CHECK_SAVED_ALBUMS, GET_ALBUM_TRACKS } from '../../queries/songQuery';
import {
	ClockIcon,
	HeartOutlinedIcon,
	HeartSolidIcon,
	HorizontalDotsIcon,
	ThumbsUpIcon
} from '../Icons/Icons';
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

	const [saveAlbum, { data: save }] = useMutation(SAVE_ALBUM);

	const [removeAlbum, { data: remove }] = useMutation(REMOVE_ALBUM);

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
							{check ? (
								<>
									{check.checkUsersSavedAlbums[0] ? (
										<div
											onClick={() => {
												removeAlbum({
													variables: { id: props.id }
												});
											}}
										>
											<HeartSolidIcon />
										</div>
									) : (
										<div
											onClick={() => {
												saveAlbum({
													variables: { id: props.id }
												});
											}}
										>
											<HeartOutlinedIcon />
										</div>
									)}
								</>
							) : (
								<HeartOutlinedIcon />
							)}
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
