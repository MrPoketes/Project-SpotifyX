import React from 'react';
import Link from 'next/link';
import { Button } from '../Button/Button';
import { HomeIcon, BrowseIcon, RadioIcon } from '../Icons/Icons';
import { useRouter } from 'next/dist/client/router';

export const SideMenu: React.FC = () => {
	const router = useRouter();
	const textStyles = 'mt-5 text-gray-500 pl-3 ml-4';

	return (
		<div
			className="fixed top-0 bg-trueGray-900 h-full pt-3"
			style={{ width: '10%' }}
		>
			{/* Main navigation */}
			<div className={router.route === '/home' ? 'text-white' : 'text-gray-500'}>
				<Link href="/home">
					<a>
						<Button className="ml-4">
							<HomeIcon />
							<p className="ml-2 font-semibold">Home</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={router.route === '/browse' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/browse">
					<a>
						<Button className="ml-4 ">
							<BrowseIcon />
							<p className="ml-2 font-semibold">Browse</p>
						</Button>
					</a>
				</Link>
			</div>
			<div className={router.route === '/radio' ? 'text-white' : 'text-gray-500'}>
				<Link href="/radio">
					<a>
						<Button className="ml-4 ">
							<RadioIcon />
							<p className="ml-2 font-semibold">Radio</p>
						</Button>
					</a>
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
					<a>
						<Button className="ml-4 ">
							<p className="font-semibold">Made for you</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={
					router.route === '/recently-played' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/recently-played">
					<a>
						<Button className="ml-4 ">
							<p className="font-semibold">Recently Played</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={
					router.route === '/liked-songs' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/liked-songs">
					<a>
						<Button className="ml-4 ">
							<p className="font-semibold">Liked Songs</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={router.route === '/albums' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/albums">
					<a>
						<Button className="ml-4 ">
							<p className="font-semibold">Albums</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={router.route === '/artists' ? 'text-white' : 'text-gray-500'}
			>
				<Link href="/artists">
					<a>
						<Button className="ml-4 ">
							<p className="font-semibold">Artists</p>
						</Button>
					</a>
				</Link>
			</div>
			<div
				className={
					router.route === '/podcasts' ? 'text-white' : 'text-gray-500'
				}
			>
				<Link href="/podcasts">
					<a>
						<Button className="ml-4">
							<p className="font-semibold">Podcasts</p>
						</Button>
					</a>
				</Link>
			</div>
			{/* Playlists */}
			<h3 className={textStyles}>Playlists</h3>
		</div>
	);
};
