import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import { AlbumContainer } from '../album/helpers/AlbumContainer';
import { Header } from '../../components/Header/Header';
import { Layout } from '../../components/Layout/Layout';
import { Section } from '../../components/Section/Section';
import { GET_ARTIST } from '../../queries/artistQuery';
import { GET_ARTIST_ALBUMS } from '../../queries/songQuery';
import { SimilarArtists } from './helpers/SimilarArtists';

export default function Artist({ artist }) {
	const { loading: loadingA, error: errorA, data: artistData } = useQuery(
		GET_ARTIST,
		{
			variables: { id: artist }
		}
	);

	const { loading, error, data } = useQuery(GET_ARTIST_ALBUMS, {
		variables: { id: artist }
	});

	const [overview, isOverview] = useState(true);

	const handleViewChange = (cond: boolean): void => {
		isOverview(cond);
	};

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					{artistData && (
						<Header
							handleChange={cond => handleViewChange(cond)}
							isOverview={overview}
							id={artist}
							followers={artistData.getArtist.followers.total}
							image={artistData.getArtist.images[0].url}
							name={artistData.getArtist.name}
							type="Artist"
						/>
					)}
					{overview ? (
						<Section title="Albums">
							{data && (
								<>
									{data.getArtistAlbums.map((album, i) => (
										<AlbumContainer
											key={i}
											image={album.images[0].url}
											releaseDate={album.release_date}
											name={album.name}
											uri={album.uri}
											id={album.id}
										/>
									))}
								</>
							)}
						</Section>
					) : (
						<Section title="Discover similar artists">
							<SimilarArtists id={artist} />
						</Section>
					)}
				</Layout>
			</main>
		</div>
	);
}

Artist.getInitialProps = ({ query: { artist } }) => {
	return { artist };
};
