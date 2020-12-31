import React from 'react';
import { Button } from '../Button/Button';
import { HomeIcon } from '../Icons/HomeIcon';

export const SideMenu: React.FC<any> = () => {
	return (
		<div className="fixed text-center top-0 text-white bg-black w-1/12 h-full">
			<Button>
				<HomeIcon />
				<h1 className="ml-2">Home</h1>
			</Button>
			<Button>
				<p>Browse</p>
			</Button>
			<Button>
				<p>Radio</p>
			</Button>
			<h3>Your library</h3>
			<Button>
				<p>Made for you</p>
			</Button>
			<Button>
				<p>Recently Played</p>
			</Button>
			<Button>
				<p>Liked Songs</p>
			</Button>
			<Button>
				<p>Albums</p>
			</Button>
			<Button>
				<p>Artists</p>
			</Button>
			<Button>
				<p>Podcasts</p>
			</Button>
			<h3>Playlists</h3>
		</div>
	);
};
