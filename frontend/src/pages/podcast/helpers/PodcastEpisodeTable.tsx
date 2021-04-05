import React from 'react';
import { CalendarIcon, ClockIcon } from '../../../components/Icons/Icons';
import { formatDuration } from '../../../utilities/formatDuration';

export const PodcastEpisodeTable: React.FC<any> = props => {
	return (
		<table className="border-collapse w-full mt-8 text-left font-normal text-base text-gray-200 table-fixed">
			<thead className="border-b border-gray-600 font-light text-gray-400">
				<tr>
					<th className="w-4/5">
						<h1>Title</h1>
					</th>
					<th style={{ width: '10%' }}>
						<h1>
							<CalendarIcon />
						</h1>
					</th>
					<th style={{ width: '10%' }}>
						<h1>
							<ClockIcon />
						</h1>
					</th>
				</tr>
			</thead>
			<tbody className="cursor-default">
				{props.episodes.map((episode, i) => (
					<tr key={i} className="border-b border-gray-600 hover:bg-gray-700">
						<td>
							<h1 className="m-1">{episode.name}</h1>
							<h1 className="mt-2 text-sm ml-1 text-gray-400 break-words">
								{episode.description}
							</h1>
						</td>
						<td className="m-1">
							<h1>{episode.release_date}</h1>
							{/* Added this so that the text would be centered top */}
							<h1 className="mt-2 invisible">s</h1>
						</td>
						<td className="m-1">
							<h1>{formatDuration(episode.duration_ms)}</h1>
							{/* Added this so that the text would be centered top */}
							<h1 className="mt-2 invisible">s</h1>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
