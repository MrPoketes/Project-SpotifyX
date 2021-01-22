import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { MainSection } from '../components/MainSection/MainSection';
import { Section } from '../components/Section/Section';
import { Card } from '../components/Card/Card';
import { GET_RECENTLY_PLAYED, GET_NEW_RELEASES } from '../queries/homePageQuery';
import { formatArtistNames } from '../utilities/formatArtistNames';
import { useQuery } from '@apollo/client';

export default function Home() {
	const { loading: loadingRP, error: errorRP, data: recentlyPlayed } = useQuery(
		GET_RECENTLY_PLAYED
	);
	const { loading: loadingNR, error: errorNR, data: newReleases } = useQuery(
		GET_NEW_RELEASES
	);

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<MainSection header="Home">
						<Section title="Recently Played">
							{recentlyPlayed && (
								<>
									{recentlyPlayed.getRecentlyPlayed.map(
										(track, i) => {
											if (i <= 5) {
												return (
													<Card
														key={i}
														header={track.track.name}
														text={() =>
															formatArtistNames(
																track.track.artists,
																track.track.artists
																	.length
															)
														}
														image={
															track.track.album.images[0]
																.url
														}
													/>
												);
											}
											return;
										}
									)}
								</>
							)}
						</Section>
						<Section title="New Releases">
							{newReleases && (
								<>
									{newReleases.getNewReleases.map((release, i) => {
										if (i <= 5) {
											return (
												<Card
													key={i}
													header={release.name}
													image={release.images[0].url}
													text={() =>
														formatArtistNames(
															release.artists,
															release.artists.length
														)
													}
												/>
											);
										}
										return;
									})}
								</>
							)}
						</Section>
					</MainSection>
				</Layout>
			</main>
		</div>
	);
}
