import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function Artists() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>Artists</Layout>
			</main>
		</div>
	);
}
