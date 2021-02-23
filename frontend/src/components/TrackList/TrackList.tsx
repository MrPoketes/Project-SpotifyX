import React from 'react';
import { ClockIcon, ThumbsUpIcon } from '../Icons/Icons';
import { ListBody } from './helpers/ListBody';
import { TrackListInterface } from './TrackListInterface';

export const TrackList: React.FC<TrackListInterface> = props => {
	return (
		<table className="border-collapse w-full mt-8 text-left font-normal text-base text-gray-200">
			<thead className="border-b border-gray-600">
				<tr>
					<th>#</th>
					<th>Title</th>
					<th></th>
					<th>
						<ClockIcon />
					</th>
					<th>
						<ThumbsUpIcon />
					</th>
				</tr>
			</thead>
			<tbody>
				{props.trackData.map((track, i) => (
					<ListBody key={i} index={i} track={track} />
				))}
			</tbody>
		</table>
	);
};
