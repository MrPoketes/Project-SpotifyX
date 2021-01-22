import Head from 'next/head';
import { useContext } from 'react';
import { Layout } from '../components/Layout/Layout';
import { AccessToken } from './_app';

export default function Browse() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>Browse</Layout>
			</main>
		</div>
	);
}
