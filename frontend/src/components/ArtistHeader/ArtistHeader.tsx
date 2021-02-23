import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ARTIST } from '../../queries/artistQuery';

export const ArtistHeader: React.FC<any> = props => {
	const { loading, error, data } = useQuery(GET_ARTIST, {
		variables: { id: props.id }
	});

	return (
		<div>
			{data && (
				<div className="relative">
					<div className="absolute bottom-0 grid gap-4 grid-cols-3">
						<div className="mb-5">
							<h1 className="text-3xl">Artist</h1>
							<h1 className="text-7xl font-bold">
								{data.getArtist.name}
							</h1>
						</div>
						<div className="text-black">
							<button>Play</button>
							<button>Follow</button>
							<button>...</button>
						</div>
						<div>
							<h1>Followers</h1>
							<h1>{data.getArtist.followers.total}</h1>
						</div>
					</div>
					<div
						className="w-full h-96 bg-cover bg-center"
						style={{
							backgroundImage: `url(${data.getArtist.images[0].url})`
						}}
					/>
				</div>
			)}
		</div>
	);
};
