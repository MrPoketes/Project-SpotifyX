import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../../components/Icons/Icons';
import { REMOVE_ALBUM, SAVE_ALBUM } from '../../../queries/saveMutations';
import { CHECK_SAVED_ALBUMS } from '../../../queries/songQuery';

interface FollowCheckInterface {
	id: string;
}
export const FollowCheck: React.FC<FollowCheckInterface> = props => {
	const { loading: loadingC, error: errorC, data: check } = useQuery(
		CHECK_SAVED_ALBUMS,
		{
			variables: { ids: props.id }
		}
	);
	const [saveAlbum, { data: save }] = useMutation(SAVE_ALBUM);

	const [removeAlbum, { data: remove }] = useMutation(REMOVE_ALBUM);
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
