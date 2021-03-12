import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { CHECK_SAVED_TRACKS } from '../../../queries/songQuery';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../Icons/Icons';
import { REMOVE_TRACK, SAVE_TRACK } from '../../../queries/saveMutations';
import { useRouter } from 'next/dist/client/router';

interface ListBodyInterface {
	type: 'playlist' | 'track';
	rowInfo: any[];
	id: string;
}

export const ListBody: React.FC<ListBodyInterface> = props => {
	const { loading, error, data } = useQuery(CHECK_SAVED_TRACKS, {
		variables: { ids: props.id }
	});
	const router = useRouter();

	const [saveTrack, { data: dataS }] = useMutation(SAVE_TRACK);

	const [removeTrack, _] = useMutation(REMOVE_TRACK);

	return (
		<tr className="border-b border-gray-600 hover:bg-gray-700">
			{props.rowInfo.map((info, i) => {
				if (props.type === 'playlist' && i === 3) {
					return (
						<td key={i}>
							<h1
								className="m-1 hover:underline"
								onClick={() => router.push(`/album/${info.id}`)}
							>
								{info.name}
							</h1>
						</td>
					);
				} else if (props.type === 'playlist' && i === 2) {
					return (
						<td key={i} className="flex">
							{info.artists.map((artist, j) => {
								if (j === info.artists.length - 1) {
									return (
										<h1
											key={j}
											className="m-1 hover:underline"
											onClick={() =>
												router.push(`/artist/${artist.id}`)
											}
										>
											{artist.name}
										</h1>
									);
								}
								return (
									<h1
										key={j}
										className="m-1 hover:underline"
										onClick={() =>
											router.push(`/artist/${artist.id}`)
										}
									>
										{artist.name},
									</h1>
								);
							})}
						</td>
					);
				}
				return (
					<td key={i}>
						<h1 className="m-1">{info}</h1>
					</td>
				);
			})}
			<td>
				{data ? (
					<>
						{data.checkUsersSavedTracks[0] ? (
							<div
								onClick={() => {
									removeTrack({ variables: { id: props.id } });
								}}
							>
								<HeartSolidIcon />
							</div>
						) : (
							<div
								onClick={() => {
									saveTrack({ variables: { id: props.id } });
								}}
							>
								<HeartOutlinedIcon />
							</div>
						)}
					</>
				) : (
					<HeartOutlinedIcon />
				)}
			</td>
		</tr>
	);
};
