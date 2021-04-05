import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Card } from '../../components/Card/Card';
import { Layout } from '../../components/Layout/Layout';
import { GET_CATEGORY_PLAYLISTS } from '../../queries/browseQuery';

export default function Genre({ genre, name, country }) {
	const { data } = useQuery(GET_CATEGORY_PLAYLISTS, {
		variables: { id: genre, country }
	});

	return (
		<div>
			<Head>
				<title>SpotifyX - {name}</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>{name}</h1>
					</div>
					{data && (
						<div className="grid grid-cols-6">
							{data.getCategoryPlaylists.map((playlist, i) => (
								<Link
									key={i}
									href="/playlist/[playlist]"
									as={`/playlist/${playlist.id}`}
								>
									<div className="mb-5">
										<Card
											id={playlist.id}
											type="playlist"
											showControls={true}
											image={
												playlist.images.length > 0
													? playlist.images[0].url
													: ''
											}
											header={playlist.name}
										/>
									</div>
								</Link>
							))}
						</div>
					)}
				</Layout>
			</main>
		</div>
	);
}

Genre.getInitialProps = ({ query: { genre, name, country } }) => {
	return { genre, name, country };
};
