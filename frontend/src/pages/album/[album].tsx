import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { ClockIcon, ThumbsUpIcon } from '../../components/Icons/Icons';
import { Layout } from '../../components/Layout/Layout';
import { TrackList } from '../../components/TrackList/TrackList';
import { GET_ALBUM } from '../../queries/albumQuery';
import { AlbumHeader } from './helpers/AlbumHeader';

export default function Album({ album, name }) {
	const { loading, error, data } = useQuery(GET_ALBUM, { variables: { id: album } });

	return (
		<div>
			<Head>
				<title>SpotifyX - Album</title>
			</Head>
			<main>
				<Layout>
					{data && (
						<>
							<AlbumHeader
								type={data.getAlbum.album_type}
								name={data.getAlbum.name}
								id={data.getAlbum.id}
								owner={data.getAlbum.artists}
								image={data.getAlbum.images[0].url}
								releaseDate={data.getAlbum.release_date}
							/>
							<TrackList
								columns={[
									'#',
									'Title',
									<ClockIcon />,
									<ThumbsUpIcon />
								]}
								type="track"
								trackData={data.getAlbum.tracks}
							/>
						</>
					)}
				</Layout>
			</main>
		</div>
	);
}
Album.getInitialProps = ({ query: { album, name } }) => {
	return { album, name };
};
