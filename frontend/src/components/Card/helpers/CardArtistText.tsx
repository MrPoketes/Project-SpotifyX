import Link from 'next/link';
import React from 'react';
import { ArtistInterface } from '../CardInterfaces';

interface CardArtistsTextInterface {
	artists: ArtistInterface[];
}
export const CardArtistText: React.FC<CardArtistsTextInterface> = props => {
	return (
		<>
			{props.artists.map((artist, i) => {
				if (i === props.artists.length - 1) {
					return (
						<Link
							key={i}
							href="/artist/[artist]"
							as={`/artist/${artist.id}`}
						>
							<button className="font-medium">
								<h1 className="hover:underline">{artist.name}</h1>
							</button>
						</Link>
					);
				} else {
					return (
						<Link
							key={i}
							href="/artist/[artist]"
							as={`/artist/${artist.id}`}
						>
							<button className="font-medium">
								<h1 className="hover:underline mr-2">
									{artist.name + ','}
								</h1>
							</button>
						</Link>
					);
				}
			})}
		</>
	);
};
