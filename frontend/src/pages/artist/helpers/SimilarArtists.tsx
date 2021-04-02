import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_RELATED } from '../../../queries/artistQuery';
import { Card } from '../../../components/Card/Card';
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
						<div key={i} className="mb-10">
							<Card
								showControls={true}
								href="/artist/[artist]"
								asHref={`/artist/${artist.id}`}
								header={artist.name}
								isArtist={true}
								image={artist.images[0].url}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
