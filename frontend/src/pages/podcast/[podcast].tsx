import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Layout } from '../../components/Layout/Layout';
import { GET_SHOW } from '../../queries/podcastQuery';
import { PodcastEpisodeTable } from './helpers/PodcastEpisodeTable';
import { PodcastHeader } from './helpers/PodcastHeader';
// import { PodcastHeader } from './helpers/PodcastHeader';

export default function Podcast({ podcast }) {
	const { data } = useQuery(GET_SHOW, { variables: { id: podcast } });
	console.log(data);
	return (
		<div>
			<Head>
				<title>SpotifyX - Podcast</title>
			</Head>
			<main>
				<Layout>
					{data && (
						<>
							<PodcastHeader
								name={data.getShow.name}
								publisher={data.getShow.publisher}
								image={
									data.getShow.images.length > 0
										? data.getShow.images[0].url
										: ''
								}
							/>
							<div className="mt-6">
								<h1 className="uppercase text-base">About</h1>
								<h1 className="mt-2 text-gray-400">
									{data.getShow.description}
								</h1>
							</div>
							<PodcastEpisodeTable episodes={data.getShow.episodes} />
						</>
					)}
				</Layout>
			</main>
		</div>
	);
}

Podcast.getInitialProps = ({ query: { podcast } }) => {
	return { podcast };
};
