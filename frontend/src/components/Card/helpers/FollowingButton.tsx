import { useQuery } from '@apollo/client';
import React from 'react';
import {
	CHECK_FOLLOWS_ARTIST,
	CHECK_SAVED_ALBUMS,
	CHECK_SAVED_SHOWS,
	CHECK_SAVED_TRACKS
} from '../../../queries/checkFollowsQueries';
import { HeartOutlinedIcon, HeartSolidIcon } from '../../Icons/Icons';

interface FollowingButtonInterface {
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show';
	id: string;
}
export const FollowingButton: React.FC<FollowingButtonInterface> = props => {
	const data = getFollowing(props.type, props.id);
	return (
		<>
			{data ? (
				<>
					{data[0] ? (
						<button
							onClick={event => {
								event.preventDefault();
								console.log('click');
							}}
							className="w-10 h-10 text-black mt-5"
						>
							<HeartSolidIcon className="w-10 h-10" />
						</button>
					) : (
						<button className="w-10 h-10 text-black mt-5">
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

const getFollowing = (
	type: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show',
	id: string
) => {
	switch (type) {
		case 'artist':
			const { data: artist } = useQuery(CHECK_FOLLOWS_ARTIST, {
				variables: { id: id }
			});
			if (artist) {
				return artist.checkIfUserFollows;
			}
			return artist;
		case 'album':
			const { data: album } = useQuery(CHECK_SAVED_ALBUMS, {
				variables: { ids: id }
			});
			if (album) {
				return album.checkUsersSavedAlbums;
			}
			return album;
		case 'track':
			const { data: track } = useQuery(CHECK_SAVED_TRACKS, {
				variables: { ids: id }
			});
			if (track) {
				return track.checkUsersSavedTracks;
			}
			return track;
		case 'show':
			const { data: show } = useQuery(CHECK_SAVED_SHOWS, {
				variables: { ids: id }
			});
			if (show) {
				return show.checkUsersSavedShows;
			}
			return show;
		default:
			return undefined;
	}
};
