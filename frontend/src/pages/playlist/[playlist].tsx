import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { PlaylistContainer } from './helpers/PlaylistContainer';
import { Layout } from '../../components/Layout/Layout';
import { GET_PLAYLIST } from '../../queries/playlistQuery';

export default function Playlist({ playlist }) {
	const { data } = useQuery(GET_PLAYLIST, {
		variables: { id: playlist }
	});
	return (
		<div>
			<Head>
				<title>SpotifyX - Playlist</title>
			</Head>
			<main>
				<Layout>
					{data && (
						<PlaylistContainer
							image={
								data.getPlaylist.images.length > 0
									? data.getPlaylist.images[0].url
									: ''
							}
							name={data.getPlaylist.name}
							owner={data.getPlaylist.owner.display_name}
							description={data.getPlaylist.description}
							tracksData={data.getPlaylist.tracks}
						/>
					)}
				</Layout>
			</main>
		</div>
	);
}

Playlist.getInitialProps = ({ query: { playlist } }) => {
	return { playlist };
};
