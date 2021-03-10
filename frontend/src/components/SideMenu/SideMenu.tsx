import React from 'react';
import { HomeIcon, BrowseIcon, RadioIcon, BurgerIcon } from '../Icons/Icons';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/client';
import { GET_ME_PLAYLISTS } from '../../queries/playlistQuery';
import { Scroller } from '../Scroller/Scroller';
import { PlaylistButton } from '../../pages/playlist/helpers/helpers/PlaylistButton';
import { slide as Menu } from 'react-burger-menu';
interface SideMenuInterface {
	id: string;
	open: boolean;
	handleBurgerClick: () => void;
}

export const SideMenu: React.FC<SideMenuInterface> = props => {
	const router = useRouter();
	const textStyles = 'mt-5 text-gray-500 pl-3 ';
	const { loading, error, data } = useQuery(GET_ME_PLAYLISTS);
	/**
	 * For some reason this button takes up the whole width of the screen and then anywhere you click the menu opens
	 */
	const stupidButton = document.querySelector('div.bm-burger-button');
	if (stupidButton) {
		stupidButton.remove();
	}
	return (
		<Menu
			pageWrapId="page-wrap"
			burgerButtonClassName=""
			burgerBarClassName=""
			width={220}
			isOpen={props.open}
			onClose={() => {
				props.handleBurgerClick();
			}}
			left
			outerContainerId="outer-container"
			className="bg-trueGray-900 pt-3"
		>
			<div className="text-center">
				<button
					className="mt-1 text-gray-500 hover:text-white"
					onClick={() => {
						props.handleBurgerClick();
					}}
				>
					<BurgerIcon className="w-8 h-8" />
				</button>
			</div>

			{/* Main navigation */}
			<div className={router.route === '/home' ? 'text-white' : 'text-gray-500'}>
				<button
					className="ml-4 flex mt-1 hover:text-white"
					onClick={() => router.push('/home')}
				>
					<HomeIcon />
					<p className="ml-2 font-semibold">Home</p>
				</button>
			</div>
			<div
				className={router.route === '/browse' ? 'text-white' : 'text-gray-500'}
			>
				<button
					className="ml-4 flex mt-5 hover:text-white"
					onClick={() => router.push('/browse')}
				>
					<BrowseIcon />
					<p className="ml-2 font-semibold">Browse</p>
				</button>
			</div>
			<div className={router.route === '/radio' ? 'text-white' : 'text-gray-500'}>
				<button
					className="ml-4 flex mt-5 hover:text-white"
					onClick={() => router.push('/radio')}
				>
					<RadioIcon />
					<p className="ml-2 font-semibold">Radio</p>
				</button>
			</div>
			{/* Your library navigation */}
			<h3 className={textStyles}>Your library</h3>
			<div
				className={
					router.route === '/made-for-you' ? 'text-white' : 'text-gray-500'
				}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/made-for-you')}
				>
					<p className="font-semibold">Made for you</p>
				</button>
			</div>
			<div
				className={
					router.route === '/recently-played' ? 'text-white' : 'text-gray-500'
				}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/recently-played')}
				>
					<p className="font-semibold">Recently Played</p>
				</button>
			</div>
			<div
				className={
					router.route === '/liked-songs' ? 'text-white' : 'text-gray-500'
				}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/liked-songs')}
				>
					<p className="font-semibold">Liked Songs</p>
				</button>
			</div>
			<div
				className={router.route === '/albums' ? 'text-white' : 'text-gray-500'}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/albums')}
				>
					<p className="font-semibold">Albums</p>
				</button>
			</div>
			<div
				className={router.route === '/artists' ? 'text-white' : 'text-gray-500'}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/artists')}
				>
					<p className="font-semibold">Artists</p>
				</button>
			</div>
			<div
				className={
					router.route === '/podcasts' ? 'text-white' : 'text-gray-500'
				}
			>
				<button
					className="ml-4 flex hover:text-white mt-5"
					onClick={() => router.push('/podcasts')}
				>
					<p className="font-semibold">Podcasts</p>
				</button>
			</div>
			{/* Playlists */}
			<h3 className={textStyles}>Playlists</h3>
			<div
				className={router.route === '/artists' ? 'text-white' : 'text-gray-500'}
			>
				{data ? (
					<Scroller>
						{data.getCurrentUserPlaylists.map((playlist, i) => (
							<button
								key={i}
								className="ml-4 flex hover:text-white mt-5"
								onClick={() => router.push(`/playlist/${playlist.id}`)}
							>
								<p className="font-semibold">
									{playlist.name.length >= 16
										? playlist.name.substring(0, 16) + '...'
										: playlist.name}
								</p>
							</button>
						))}
					</Scroller>
				) : (
					<div></div>
				)}
			</div>
			<PlaylistButton id={props.id} />
		</Menu>
	);
};
