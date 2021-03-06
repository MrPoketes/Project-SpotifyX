import React from 'react';
import { formatArtistNames } from '../../utilities/formatArtistNames';
import { formatDuration } from '../../utilities/formatDuration';
import { ListBody } from './helpers/ListBody';
import {
	PlaylistInterface,
	TrackInterface,
	TrackListInterface
} from './TrackListInterface';

export const TrackList: React.FC<TrackListInterface> = props => {
	const getRowInfo = (
		track: TrackInterface | PlaylistInterface,
		index: number
	): string[] => {
		if (props.type === 'track') {
			return [
				(index + 1).toString(),
				track.name,
				formatDuration(track.duration_ms)
			];
		}
		if (props.type === 'playlist') {
			const playlistTrack = track as PlaylistInterface;
			return [
				(index + 1).toString(),
				track.name,
				formatArtistNames(playlistTrack.artists, playlistTrack.artists.length),
				playlistTrack.album.name.length >= 20
					? playlistTrack.album.name.substring(0, 20) + '...'
					: playlistTrack.album.name,
				playlistTrack.releaseDate.substring(0, 10),
				formatDuration(track.duration_ms)
			];
		}
	};
	return (
		<table className="border-collapse w-full mt-8 text-left font-normal text-base text-gray-200">
			<thead className="border-b border-gray-600 font-light text-gray-400">
				<tr>
					{props.columns.map((column, i) => (
						<th className="uppercase" key={i}>
							<h1 className="m-1">{column}</h1>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{props.trackData.length > 0 ? (
					<>
						{props.trackData.map((track, i) => {
							return (
								<ListBody
									key={i}
									rowInfo={getRowInfo(track, i)}
									id={track.id}
								/>
							);
						})}
					</>
				) : (
					<div></div>
				)}
			</tbody>
		</table>
	);
};
