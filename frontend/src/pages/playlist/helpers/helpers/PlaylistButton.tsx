import React from 'react';
import { PlusCircleIcon } from '../../../../components/Icons/Icons';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { CREATE_PLAYLIST } from '../../../../queries/playlistQuery';

interface PlaylistButtonInterface {
	id: string;
}
export const PlaylistButton: React.FC<PlaylistButtonInterface> = props => {
	const [createPlaylist, { data }] = useMutation(CREATE_PLAYLIST);
	const handleClick = () => {
		Swal.fire({
			title: 'Create Playlist',
			html: `<input type="text" class="swal2-input" id="name" placeholder="Name"> <input type="text" id="description" class="swal2-input" placeholder="Description"> <input class="swal2-checkbox" type="checkbox" id="public" name="public"> <label for="public">Public</label>`,
			confirmButtonText: 'Create',
			confirmButtonColor: 'green',
			preConfirm: () => {
				const name = (Swal.getPopup().querySelector(
					'#name'
				) as HTMLInputElement).value;
				const description = (Swal.getPopup().querySelector(
					'#description'
				) as HTMLInputElement).value;
				const isPublic = (Swal.getPopup().querySelector(
					'#public'
				) as HTMLInputElement).checked;
				if (name === '') {
					Swal.showValidationMessage('Please enter a name');
				}
				return { name, description, public: isPublic };
			}
		}).then(result => {
			if (result.value && result.value.name) {
				createPlaylist({
					variables: {
						id: props.id,
						name: result.value.name,
						description: result.value.description,
						public: result.value.public
					}
				});
				Swal.fire({
					title: `Successfully created playlist ${result.value.name}`,
					confirmButtonColor: 'green'
				});
			}
		});
	};

	return (
		<button
			className="text-gray-500 hover:text-white mt-5 ml-4 flex font-semibold cursor-pointer"
			onClick={() => handleClick()}
		>
			<PlusCircleIcon />
			<h1 className="ml-2">New Playlist</h1>
		</button>
	);
};
