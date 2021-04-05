import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { CHECK_SAVED_TRACKS } from '../../../queries/checkFollowsQueries';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../Icons/Icons';
import { REMOVE_TRACK, SAVE_TRACK } from '../../../queries/saveMutations';
import Link from 'next/link';

interface ListBodyInterface {
	type: 'playlist' | 'track';
	rowInfo: any[];
	id: string;
}

export const ListBody: React.FC<ListBodyInterface> = props => {
	const { data } = useQuery(CHECK_SAVED_TRACKS, {
		variables: { ids: props.id }
	});

	const [saveTrack] = useMutation(SAVE_TRACK, {
		refetchQueries: [{ query: CHECK_SAVED_TRACKS, variables: { ids: props.id } }]
	});

	const [removeTrack] = useMutation(REMOVE_TRACK, {
		refetchQueries: [{ query: CHECK_SAVED_TRACKS, variables: { ids: props.id } }]
	});

	return (
		<tr className="border-b border-gray-600 hover:bg-gray-700">
			{props.rowInfo.map((info, i) => {
				if (props.type === 'playlist' && i === 3) {
					return (
						<Link href="/album/[album]" as={`/album/${info.id}`} key={i}>
							<td>
								<h1 className="m-1 hover:underline">{info.name}</h1>
							</td>
						</Link>
					);
				} else if (props.type === 'playlist' && i === 2) {
					return (
						<td key={i} className="flex">
							{info.artists.map((artist, j) => {
								if (j === info.artists.length - 1) {
									return (
										<Link
											key={j}
											href="/artist/[artist]"
											as={`/artist/${artist.id}`}
										>
											<h1 key={j} className="m-1 hover:underline">
												{artist.name}
											</h1>
										</Link>
									);
								}
								return (
									<Link
										key={j}
										href="/artist/[artist]"
										as={`/artist/${artist.id}`}
									>
										<h1 key={j} className="m-1 hover:underline">
											{artist.name},
										</h1>
									</Link>
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
