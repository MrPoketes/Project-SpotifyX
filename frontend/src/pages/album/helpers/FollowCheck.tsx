import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../../components/Icons/Icons';
import { REMOVE_ALBUM, SAVE_ALBUM } from '../../../queries/saveMutations';
import { CHECK_SAVED_ALBUMS } from '../../../queries/songQuery';

interface FollowCheckInterface {
	id: string;
}
export const FollowCheck: React.FC<FollowCheckInterface> = props => {
	const {
		loading: loadingC,
		error: errorC,
		data: check
	} = useQuery(CHECK_SAVED_ALBUMS, { variables: { ids: props.id } });
	const [saveAlbum, { data: save }] = useMutation(SAVE_ALBUM);

	const [removeAlbum, { data: remove }] = useMutation(REMOVE_ALBUM);
	return (
		<>
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
		</>
	);
};
