import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { ArtistInterface } from '../Card';

interface CardArtistsTextInterface {
	artists: ArtistInterface[];
}
export const CardArtistText: React.FC<CardArtistsTextInterface> = props => {
	const router = useRouter();
	return (
		<>
			{props.artists.map((artist, i) => {
				if (i === props.artists.length - 1) {
					return (
						<button
							key={i}
							className="font-medium"
							onClick={() => router.push(`/artist/${artist.id}`)}
						>
							<h1 className="hover:underline">{artist.name}</h1>
						</button>
					);
				} else {
					return (
						<button
							key={i}
							className="font-medium"
							onClick={() => router.push(`/artist/${artist.id}`)}
						>
							<h1 className="hover:underline mr-2">
								{artist.name + ','}
							</h1>
						</button>
					);
				}
			})}
		</>
	);
};
