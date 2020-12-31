import React from 'react';
import Link from 'next/link';
import { Button } from '../Button/Button';
import { HomeIcon, BrowseIcon, RadioIcon } from '../Icons/Icons';

export const SideMenu: React.FC<any> = () => {
	const textStyles = 'mt-5 text-gray-500 pl-3';

	return (
		<div className="fixed top-0 bg-trueGray-900 w-1/12 h-full pt-3">
			{/* Main navigation */}
			<Link href="/">
				<a>
					<Button>
						<HomeIcon />
						<p className="ml-2 font-semibold">Home</p>
					</Button>
				</a>
			</Link>
			<Link href="/browse">
				<a>
					<Button>
						<BrowseIcon />
						<p className="ml-2 font-semibold">Browse</p>
					</Button>
				</a>
			</Link>
			<Link href="radio">
				<a>
					<Button>
						<RadioIcon />
						<p className="ml-2 font-semibold">Radio</p>
					</Button>
				</a>
			</Link>
			{/* Your library navigation */}
			<h3 className={textStyles}>Your library</h3>
			<Link href="made-for-you">
				<a>
					<Button>
						<p className="font-semibold">Made for you</p>
					</Button>
				</a>
			</Link>
			<Link href="recently-played">
				<a>
					<Button>
						<p className="font-semibold">Recently Played</p>
					</Button>
				</a>
			</Link>
			<Link href="liked-songs">
				<a>
					<Button>
						<p className="font-semibold">Liked Songs</p>
					</Button>
				</a>
			</Link>
			<Link href="albums">
				<a>
					<Button>
						<p className="font-semibold">Albums</p>
					</Button>
				</a>
			</Link>
			<Link href="artists">
				<a>
					<Button>
						<p className="font-semibold">Artists</p>
					</Button>
				</a>
			</Link>
			<Link href="podcasts">
				<a>
					<Button>
						<p className="font-semibold">Podcasts</p>
					</Button>
				</a>
			</Link>
			{/* Playlists */}
			<h3 className={textStyles}>Playlists</h3>
		</div>
	);
};
