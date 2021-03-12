import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function MadeForYou() {
	return (
		<div>
			<Head>
				<title>SpotifyX - Made for you</title>
			</Head>
			<main>
				<Layout>Made for you</Layout>
			</main>
		</div>
	);
}
