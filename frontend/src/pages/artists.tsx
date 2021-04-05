import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card/Card';
import { Layout } from '../components/Layout/Layout';
import { GET_SAVED_ARTISTS } from '../queries/savedQuery';

export default function Artists() {
	const { data } = useQuery(GET_SAVED_ARTISTS);

	return (
		<div>
			<Head>
				<title>SpotifyX - Artists</title>
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
										<Link
											key={i}
											href="/artist/[artist]"
											as={`/artist/${artist.id}`}
										>
											<div className="mb-5">
												<Card
													showControls={true}
													isArtist={true}
													image={
														artist.images.length > 0
															? artist.images[0].url
															: ''
													}
													header={artist.name}
												/>
											</div>
										</Link>
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
