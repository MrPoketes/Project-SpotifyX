import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { CHECK_SAVED_TRACKS } from '../../../queries/songQuery';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../Icons/Icons';
import { REMOVE_TRACK, SAVE_TRACK } from '../../../queries/saveMutations';

interface ListBodyInterface {
	rowInfo: string[];
	id: string;
}

export const ListBody: React.FC<ListBodyInterface> = props => {
	const { loading, error, data } = useQuery(CHECK_SAVED_TRACKS, {
		variables: { ids: props.id }
	});

	const [saveTrack, { data: dataS }] = useMutation(SAVE_TRACK);

	const [removeTrack, _] = useMutation(REMOVE_TRACK);

	return (
		<tr className="border-b border-gray-600 hover:bg-gray-700">
			{props.rowInfo.map((info, i) => (
				<td key={i}>
					<h1 className="m-1">{info}</h1>
				</td>
			))}
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
