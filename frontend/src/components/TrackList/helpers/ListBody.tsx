import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CHECK_SAVED_TRACKS } from '../../../queries/songQuery';
import { formatDuration } from '../../../utilities/formatDuration';
import { HeartOutlinedIcon, HeartSolidIcon, PlayIcon } from '../../Icons/Icons';
import { TrackInterface } from '../TrackListInterface';

interface ListBodyInterface {
	index: number;
	track: TrackInterface;
}

export const ListBody: React.FC<ListBodyInterface> = props => {
	const [hovered, setHovered] = useState(false);

	const { loading, error, data } = useQuery(CHECK_SAVED_TRACKS, {
		variables: { ids: props.track.id }
	});

	return (
		<tr
			className="border-b border-gray-600 hover:bg-gray-700"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<td>{hovered ? <PlayIcon /> : <h1>{props.index + 1}</h1>}</td>
			<td>{props.track.name}</td>
			<td>{props.track.explicit ? 'Explicit' : ''}</td>
			<td>{formatDuration(props.track.duration_ms)}</td>
			<td>
				{data ? (
					<>
						{data.checkUsersSavedTracks[0] ? (
							<HeartSolidIcon />
						) : (
							<HeartOutlinedIcon />
						)}
					</>
				) : (
					<HeartOutlinedIcon />
				)}
			</td>
		</tr>
	);
};
