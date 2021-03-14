import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { BrowseGenres } from '../components/BrowseComponents/BrowseGenres';
import { Layout } from '../components/Layout/Layout';
import { GET_ME_DATA } from '../queries/userQuery';

export default function Browse() {
	const { loading: loadingMe, error: errorMe, data: meData } = useQuery(GET_ME_DATA);
	return (
		<div>
			<Head>
				<title>SpotifyX - Browse</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Browse</h1>
					</div>
					{meData && <BrowseGenres country={meData.getMe.country} />}
				</Layout>
			</main>
		</div>
	);
}
