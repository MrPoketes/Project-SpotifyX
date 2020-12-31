import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function LikedSongs() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>Liked songs</Layout>
			</main>
		</div>
	);
}
