import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';

export default function Albums() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>Albums</Layout>
			</main>
		</div>
	);
}
