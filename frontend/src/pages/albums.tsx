import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card/Card';
import { Layout } from '../components/Layout/Layout';
import { GET_SAVED_ALBUMS } from '../queries/savedQuery';

export default function Albums() {
	const { data } = useQuery(GET_SAVED_ALBUMS);
	return (
		<div>
			<Head>
				<title>SpotifyX - Albums</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Albums</h1>
					</div>
					{data && (
						<>
							{data.getSavedAlbums.length > 0 ? (
								<div className="grid grid-cols-6">
									{data.getSavedAlbums.map((album, i) => (
										<Link
											key={i}
											href="/album/[album]"
											as={`/album/${album.album.id}`}
										>
											<div className="mb-5">
												<Card
													showControls={true}
													image={
														album.album.images.length > 0
															? album.album.images[0].url
															: ''
													}
													header={album.album.name}
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
