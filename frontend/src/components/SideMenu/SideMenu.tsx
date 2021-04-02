import React from 'react';
import { HomeIcon, BrowseIcon, RadioIcon, BurgerIcon } from '../Icons/Icons';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/client';
import { GET_ME_PLAYLISTS } from '../../queries/playlistQuery';
import { Scroller } from '../Scroller/Scroller';
import { PlaylistButton } from '../../pages/playlist/helpers/PlaylistButton';
import { slide as Menu } from 'react-burger-menu';
import { SideMenuInterface } from './SideMenuInterfaces';
import Link from 'next/link';

export const SideMenu: React.FC<SideMenuInterface> = props => {
	const router = useRouter();
	const textStyles = 'mt-5 text-gray-500 pl-3';
	const buttonStyles = 'flex hover:text-white mt-5';
	const { data } = useQuery(GET_ME_PLAYLISTS);
	/**
	 * For some reason this button takes up the whole width of the screen and then anywhere you click, the menu opens
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
			<div className="ml-4 text-gray-500">
				<div className="text-left">
					<button
						className="flex mt-1 hover:text-white"
						onClick={() => props.handleBurgerClick()}
					>
						<BurgerIcon className="w-8 h-8" />
					</button>
				</div>

				{/* Main navigation */}
				<div className={router.route === '/home' ? 'text-white' : ''}>
					<Link href="/home">
						<button className="flex mt-1 hover:text-white">
							<HomeIcon />
							<p className="ml-2 font-semibold">Home</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/browse' ? 'text-white' : ''}>
					<Link href="/browse">
						<button className="flex mt-5 hover:text-white">
							<BrowseIcon />
							<p className="ml-2 font-semibold">Browse</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/radio' ? 'text-white' : ''}>
					<Link href="/radio">
						<button className="flex mt-5 hover:text-white">
							<RadioIcon />
							<p className="ml-2 font-semibold">Radio</p>
						</button>
					</Link>
				</div>
				{/* Your library navigation */}
				<h3 className={textStyles}>Your library</h3>
				<div className={router.route === '/made-for-you' ? 'text-white' : ''}>
					<Link href="/made-for-you">
						<button className={buttonStyles}>
							<p className="font-semibold">Made for you</p>
						</button>
					</Link>
				</div>
				<div
					className={router.route === '/recently-played' ? 'text-white' : ''}
				>
					<Link href="/recently-played">
						<button className={buttonStyles}>
							<p className="font-semibold">Recently Played</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/liked-songs' ? 'text-white' : ''}>
					<Link href="/liked-songs">
						<button className={buttonStyles}>
							<p className="font-semibold">Liked Songs</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/albums' ? 'text-white' : ''}>
					<Link href="/albums">
						<button className={buttonStyles}>
							<p className="font-semibold">Albums</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/artists' ? 'text-white' : ''}>
					<Link href="/artists">
						<button className={buttonStyles}>
							<p className="font-semibold">Artists</p>
						</button>
					</Link>
				</div>
				<div className={router.route === '/podcasts' ? 'text-white' : ''}>
					<Link href="/podcasts">
						<button className={buttonStyles}>
							<p className="font-semibold">Podcasts</p>
						</button>
					</Link>
				</div>
				{/* Playlists */}
				<h3 className={textStyles}>Playlists</h3>
				{data ? (
					<Scroller>
						{data.getCurrentUserPlaylists.map((playlist, i) => (
							<Link
								key={i}
								href="/playlist/[playlist]"
								as={`/playlist/${playlist.id}`}
							>
								<button className={buttonStyles}>
									<p className="font-semibold">
										{playlist.name.length >= 16
											? playlist.name.substring(0, 16) + '...'
											: playlist.name}
									</p>
								</button>
							</Link>
						))}
					</Scroller>
				) : (
					<div></div>
				)}
				<PlaylistButton id={props.id} />
			</div>
		</Menu>
	);
};
