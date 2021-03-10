import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { Card } from '../components/Card/Card';
import { Layout } from '../components/Layout/Layout';
import { GET_SAVED_ARTISTS } from '../queries/savedQuery';

export default function Artists() {
	const { loading, error, data } = useQuery(GET_SAVED_ARTISTS);

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Artists</h1>
					</div>
					{data && (
						<>
							{data.getFollowedArtists.length > 0 ? (
								<div className="grid grid-cols-6">
									{data.getFollowedArtists.map((artist, i) => (
										<div className="mb-5" key={i}>
											<Card
												isArtist={true}
												image={artist.images[0].url}
												header={artist.name}
												artists={[]}
												artistId={artist.id}
											/>
										</div>
									))}
								</div>
							) : (
								<div className="text-2xl mt-5 text-center">
									No saved albums found
								</div>
							)}
						</>
					)}
				</Layout>
			</main>
		</div>
	);
}
