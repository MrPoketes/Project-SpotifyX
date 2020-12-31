import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function RecentlyPlayed() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>Recently played</Layout>
			</main>
		</div>
	);
}
