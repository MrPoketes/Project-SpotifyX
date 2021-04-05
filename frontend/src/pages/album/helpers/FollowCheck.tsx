import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../../components/Icons/Icons';
import { REMOVE_ALBUM, SAVE_ALBUM } from '../../../queries/saveMutations';
import { CHECK_SAVED_ALBUMS } from '../../../queries/checkFollowsQueries';

interface FollowCheckInterface {
	id: string;
}
export const FollowCheck: React.FC<FollowCheckInterface> = props => {
	const { data: check } = useQuery(CHECK_SAVED_ALBUMS, {
		variables: { ids: props.id }
	});
	const [saveAlbum] = useMutation(SAVE_ALBUM, {
		refetchQueries: [{ query: CHECK_SAVED_ALBUMS, variables: { ids: props.id } }]
	});

	const [removeAlbum] = useMutation(REMOVE_ALBUM, {
		refetchQueries: [{ query: CHECK_SAVED_ALBUMS, variables: { ids: props.id } }]
	});
	return (
		<Button
			className="bg-gray-700 border mr-2 border-white"
			onClick={() => {
				if (check && check.checkUsersSavedAlbums[0]) {
					removeAlbum({ variables: { id: props.id } });
				} else {
					saveAlbum({ variables: { id: props.id } });
				}
			}}
		>
			{check ? (
				<>
					{check.checkUsersSavedAlbums[0] ? (
						<div>
							<HeartSolidIcon />
						</div>
					) : (
						<div>
							<HeartOutlinedIcon />
						</div>
					)}
				</>
			) : (
				<HeartOutlinedIcon />
			)}
		</Button>
	);
};
