import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { AlbumContainer } from '../../components/AlbumContainer/AlbumContainer';
import { ArtistHeader } from '../../components/ArtistHeader/ArtistHeader';
import { Layout } from '../../components/Layout/Layout';
import { Section } from '../../components/Section/Section';
import { GET_ARTIST_ALBUMS } from '../../queries/songQuery';

export default function Artist({ artist }) {
	const { loading, error, data } = useQuery(GET_ARTIST_ALBUMS, {
		variables: { id: artist }
	});

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<ArtistHeader id={artist} />
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
				</Layout>
			</main>
		</div>
	);
}

Artist.getInitialProps = ({ query: { artist } }) => {
	return { artist };
};
