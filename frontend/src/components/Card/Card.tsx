import React from 'react';
import { HeartOutlinedIcon, HorizontalDotsIcon, PlayIcon } from '../Icons/Icons';
import { CardArtistText } from './helpers/CardArtistText';
import { useRouter } from 'next/dist/client/router';
import { CardInterface } from './CardInterfaces';

export const Card: React.FC<CardInterface> = props => {
	const router = useRouter();
	/**
	 * hrefs for the entire card
	 */
	let hrefWhole = '';
	/**
	 * hrefs for an album
	 */
	let hrefAlbum = '';

	if (props.albumId) {
		hrefAlbum = `/album/${props.albumId}`;
	}

	if (props.artistId) {
		hrefWhole = `/artist/${props.artistId}`;
	} else if (props.playlistId) {
		hrefWhole = `/playlist/${props.playlistId}`;
	}

	return (
		<>
			<div
				className="mr-5"
				onClick={() => {
					if (hrefWhole === '') {
						router.push(hrefAlbum);
					} else {
						router.push(hrefWhole);
					}
				}}
			>
				<div className="flex relative cursor-pointer hover-opacity">
					<img
						src={props.image}
						className={
							props.isArtist
								? 'rounded-full transition ease-in-out w-80 h-80'
								: 'transition ease-in-out w-80 h-80'
						}
					/>
					<div className="flex absolute cursor-default h-1/2 w-full justify-center top-1/3 card-buttons">
						<HeartOutlinedIcon className="w-10 h-10 text-black mt-5" />
						<PlayIcon className="w-20 h-20 text-black" />
						<HorizontalDotsIcon className="w-10 h-10 mt-5 text-black" />
					</div>
				</div>

				<div className="mt-2 text-center">
					<button
						className="font-bold"
						onClick={() => {
							if (hrefAlbum === '') {
								router.push(hrefWhole);
							} else {
								router.push(hrefAlbum);
							}
						}}
					>
						<h1 className="cursor-pointer">
							{props.header.length >= 25
								? props.header.substring(0, 25) + '...'
								: props.header}
						</h1>
					</button>
				</div>
			</div>
			{props.artists.length !== 0 && (
				<div className="cursor-pointer font-medium text-sm text-gray-400 flex justify-center">
					<CardArtistText artists={props.artists} />
				</div>
			)}
		</>
	);
};
