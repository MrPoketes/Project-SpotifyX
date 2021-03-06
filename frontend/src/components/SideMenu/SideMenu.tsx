import React from 'react';
import Link from 'next/link';
import { HomeIcon, BrowseIcon, RadioIcon, PlusCircleIcon } from '../Icons/Icons';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/client';
import { GET_ME_PLAYLISTS } from '../../queries/playlistQuery';
import { Scroller } from '../Scroller/Scroller';
import { PlaylistButton } from '../Playlist/helpers/PlaylistButton';

interface SideMenuInterface {
	id: string;
}

export const SideMenu: React.FC<SideMenuInterface> = props => {
	const router = useRouter();
	const textStyles = 'mt-5 text-gray-500 pl-3 ';
	const { loading, error, data } = useQuery(GET_ME_PLAYLISTS);

	return (
		<div
			className="fixed top-0 bg-trueGray-900 h-full pt-3"
			style={{ width: '10%' }}
		>
			{/* Main navigation */}
			<div className={router.route === '/home' ? 'text-white' : 'text-gray-500'}>
				<Link href="/home">
					<button className="ml-4 flex mt-5 hover:text-white focus:outline-none">
						<HomeIcon />
						<p className="ml-2 font-semibold">Home</p>
					</button>
				</Link>
			</div>
			<div
				className={router.route === '/browse' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/browse">
					<button className="ml-4 flex mt-5 hover:text-white focus:outline-none">
						<BrowseIcon />
						<p className="ml-2 font-semibold">Browse</p>
					</button>
				</Link>
			</div>
			<div className={router.route === '/radio' ? 'text-white' : 'text-gray-500'}>
				<Link href="/radio">
					<button className="ml-4 flex mt-5 hover:text-white focus:outline-none">
						<RadioIcon />
						<p className="ml-2 font-semibold">Radio</p>
					</button>
				</Link>
			</div>
			{/* Your library navigation */}
			<h3 className={textStyles}>Your library</h3>
			<div
				className={
					router.route === '/made-for-you' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/made-for-you">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Made for you</p>
					</button>
				</Link>
			</div>
			<div
				className={
					router.route === '/recently-played' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/recently-played">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Recently Played</p>
					</button>
				</Link>
			</div>
			<div
				className={
					router.route === '/liked-songs' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/liked-songs">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Liked Songs</p>
					</button>
				</Link>
			</div>
			<div
				className={router.route === '/albums' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/albums">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Albums</p>
					</button>
				</Link>
			</div>
			<div
				className={router.route === '/artists' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/artists">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Artists</p>
					</button>
				</Link>
			</div>
			<div
				className={
					router.route === '/podcasts' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/podcasts">
					<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
						<p className="font-semibold">Podcasts</p>
					</button>
				</Link>
			</div>
			{/* Playlists */}
			<h3 className={textStyles}>Playlists</h3>
			<div
				className={router.route === '/artists' ? 'text-white' : 'text-gray-500'}
			>
				{data ? (
					<Scroller>
						{data.getCurrentUserPlaylists.map((playlist, i) => (
							<Link
								key={i}
								href="/playlist/[playlist]"
								as={`/playlist/${playlist.id}`}
							>
								<button className="ml-4 flex hover:text-white focus:outline-none mt-5">
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
			</div>
			<PlaylistButton id={props.id} />
		</div>
	);
};
