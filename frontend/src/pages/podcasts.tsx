import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function Podcasts() {
	return (
		<div>
			<Head>
				<title>SpotifyX - Podcasts</title>
			</Head>
			<main>
				<Layout>Podcasts</Layout>
			</main>
		</div>
	);
}
