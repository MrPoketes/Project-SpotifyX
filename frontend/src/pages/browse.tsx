import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

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
