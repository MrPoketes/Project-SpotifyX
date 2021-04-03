import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { GET_SHOW } from '../../queries/podcastQuery';

export default function Podcast({ podcast }) {
	const { data } = useQuery(GET_SHOW, { variables: { id: podcast } });
	console.log(data);
	return (
		<div>
			<Head>
				<title>SpotifyX - Podcast</title>
			</Head>
			<main>
				<Layout></Layout>
			</main>
		</div>
	);
}

Podcast.getInitialProps = ({ query: { podcast } }) => {
	return { podcast };
};
