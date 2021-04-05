import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card/Card';
import { Layout } from '../components/Layout/Layout';
import { GET_SAVED_SHOWS } from '../queries/savedQuery';

export default function Podcasts() {
	const { data } = useQuery(GET_SAVED_SHOWS);

	return (
		<div>
			<Head>
				<title>SpotifyX - Podcasts</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Podcasts</h1>
					</div>
					{data && data.getSavedShows.length > 0 ? (
						<div className="grid grid-cols-6">
							{data.getSavedShows.map((saved, i) => (
								<Link
									key={i}
									href="/podcast/[podcast]"
									as={`/podcast/${saved.show.id}`}
								>
									<div className="mb-5">
										<Card
											id={saved.show.id}
											type="show"
											showControls={true}
											image={
												saved.show.images.length > 0
													? saved.show.images[0].url
													: ''
											}
											header={saved.show.name}
										>
											<div className="text-gray-400">
												<h1>
													{saved.show.description.length > 105
														? saved.show.description.substring(
																0,
																105
														  ) + '...'
														: saved.show.description}
												</h1>
												<h1>
													{saved.show.total_episodes} Episodes
												</h1>
											</div>
										</Card>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="text-2xl mt-5 text-center">
							No liked podcasts found
						</div>
					)}
				</Layout>
			</main>
		</div>
	);
}
