import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
	CHECK_FOLLOWS_ARTIST,
	CHECK_SAVED_ALBUMS,
	CHECK_SAVED_SHOWS,
	CHECK_SAVED_TRACKS
} from '../../../queries/checkFollowsQueries';
import {
	FOLLOW_ARTIST_USER,
	FOLLOW_PLAYLIST,
	UNFOLLOW_ARTIST_USER,
	UNFOLLOW_PLAYLIST
} from '../../../queries/followMutation';
import {
	REMOVE_ALBUM,
	REMOVE_SHOW,
	REMOVE_TRACK,
	SAVE_ALBUM,
	SAVE_SHOW,
	SAVE_TRACK
} from '../../../queries/saveMutations';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../Icons/Icons';

interface FollowingButtonInterface {
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show';
	id: string;
}

export const FollowingButton: React.FC<FollowingButtonInterface> = props => {
	const query = getQuery(props.type);
	const { data } = useQuery(query, { variables: { ids: props.id } });
	const [follow] = useMutation(getFollow(props.type), {
		refetchQueries: [{ query, variables: { ids: props.id } }]
	});
	const [unfollow] = useMutation(getUnfollow(props.type), {
		refetchQueries: [{ query, variables: { ids: props.id } }]
	});

	const getName = () => {
		switch (props.type) {
			case 'artist':
				return 'checkIfUserFollows';
			case 'album':
				return 'checkUsersSavedAlbums';
			case 'track':
				return 'checkUsersSavedTracks';
			case 'show':
				return 'checkUsersSavedShows';
			case 'playlist':
				return '';
		}
	};

	return (
		<>
			{data ? (
				<>
					{getName() !== '' && data[getName()][0] ? (
						<button
							onClick={event => {
								event.preventDefault();
								if (props.type === 'artist') {
									unfollow({
										variables: { id: props.id, type: 'artist' }
									});
									return;
								}
								unfollow({ variables: { id: props.id } });
							}}
							className="w-10 h-10 text-black mt-5"
						>
							<HeartSolidIcon className="w-10 h-10" />
						</button>
					) : (
						<button
							className="w-10 h-10 text-black mt-5"
							onClick={event => {
								event.preventDefault();
								if (props.type === 'artist') {
									follow({
										variables: { id: props.id, type: 'artist' }
									});
									return;
								}
								follow({ variables: { id: props.id } });
							}}
						>
							<HeartOutlinedIcon className="w-10 h-10" />
						</button>
					)}
				</>
			) : (
				<button className="w-10 h-10 text-black mt-5">
					<HeartOutlinedIcon className="w-10 h-10" />
				</button>
			)}
		</>
	);
};

const getFollow = (
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show'
): any => {
	switch (type) {
		case 'artist':
			return FOLLOW_ARTIST_USER;
		case 'album':
			return SAVE_ALBUM;
		case 'track':
			return SAVE_TRACK;
		case 'show':
			return SAVE_SHOW;
		case 'playlist':
			return FOLLOW_PLAYLIST;
	}
};

const getUnfollow = (
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show'
): any => {
	switch (type) {
		case 'artist':
			return UNFOLLOW_ARTIST_USER;
		case 'album':
			return REMOVE_ALBUM;
		case 'track':
			return REMOVE_TRACK;
		case 'show':
			return REMOVE_SHOW;
		case 'playlist':
			return UNFOLLOW_PLAYLIST;
	}
};

const getQuery = (
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show'
): any => {
	switch (type) {
		case 'artist':
			return CHECK_FOLLOWS_ARTIST;
		case 'album':
			return CHECK_SAVED_ALBUMS;
		case 'track':
			return CHECK_SAVED_TRACKS;
		case 'show':
			return CHECK_SAVED_SHOWS;
		case 'playlist':
			return CHECK_SAVED_ALBUMS;
	}
};
