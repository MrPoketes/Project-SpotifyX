import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { SideMenu } from '../components/SideMenu/SideMenu';

export default function Home() {
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<SideMenu />
				<Layout>
					<p>Main area</p>
				</Layout>
			</main>
		</div>
	);
}
