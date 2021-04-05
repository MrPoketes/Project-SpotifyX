import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_RELATED } from '../../../queries/artistQuery';
import { Card } from '../../../components/Card/Card';
import Link from 'next/link';
interface SimilarArtistsInterface {
	id: string;
}
export const SimilarArtists: React.FC<SimilarArtistsInterface> = props => {
	const { data } = useQuery(GET_RELATED, {
		variables: { id: props.id }
	});

	return (
		<div>
			{data && (
				<div className="grid grid-cols-6">
					{data.getArtistRelated.map((artist, i) => (
						<Link
							key={i}
							href="/artist/[artist]"
							as={`/artist/${artist.id}`}
						>
							<div className="mb-10">
								<Card
									showControls={true}
									header={artist.name}
									isArtist={true}
									image={
										artist.images.length > 0
											? artist.images[0].url
											: ''
									}
								/>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};
