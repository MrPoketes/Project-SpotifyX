import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { Card } from '../components/Card/Card';
import { LoadingIcon } from '../components/Icons/Icons';
import { Layout } from '../components/Layout/Layout';
import { GET_RECENTLY_PLAYED } from '../queries/homePageQuery';

export default function RecentlyPlayed() {
	const { loading: loadingRP, error: errorRP, data: recentlyPlayed } = useQuery(
		GET_RECENTLY_PLAYED
	);
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Recently Played</h1>
					</div>
					{recentlyPlayed ? (
						<div className="grid grid-cols-6">
							{recentlyPlayed.getRecentlyPlayed.map((track, i) => (
								<div className="mb-5" key={i}>
									<Card
										albumId={track.track.album.id}
										header={track.track.name}
										artists={track.track.artists}
										image={track.track.album.images[0].url}
									/>
								</div>
							))}
						</div>
					) : (
						<div className="flex justify-center w-full p-10">
							<LoadingIcon className="w-16 h-16" />
						</div>
					)}
				</Layout>
			</main>
		</div>
	);
}
