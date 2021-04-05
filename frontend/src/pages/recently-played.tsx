import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card/Card';
import { CardArtistText } from '../components/Card/helpers/CardArtistText';
import { LoadingIcon } from '../components/Icons/Icons';
import { Layout } from '../components/Layout/Layout';
import { GET_RECENTLY_PLAYED } from '../queries/homePageQuery';

export default function RecentlyPlayed() {
	const { data: recentlyPlayed } = useQuery(GET_RECENTLY_PLAYED);
	return (
		<div>
			<Head>
				<title>SpotifyX - Recently Played</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Recently Played</h1>
					</div>
					{recentlyPlayed ? (
						<div className="grid grid-cols-6">
							{recentlyPlayed.getRecentlyPlayed.map((track, i) => (
								<Link
									key={i}
									href="/album/[album]"
									as={`/album/${track.track.album.id}`}
								>
									<div className="mb-5">
										<Card
											id={track.track.album.id}
											type="track"
											showControls={true}
											header={track.track.name}
											image={
												track.track.album.images.length > 0
													? track.track.album.images[0].url
													: ''
											}
											artistText={
												<CardArtistText
													artists={track.track.artists}
												/>
											}
										/>
									</div>
								</Link>
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
