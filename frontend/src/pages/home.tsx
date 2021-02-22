import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { MainSection } from '../components/MainSection/MainSection';
import { Section } from '../components/Section/Section';
import { Card } from '../components/Card/Card';
import {
	GET_RECENTLY_PLAYED,
	GET_NEW_RELEASES,
	GET_FEATURED_PLAYLISTS
} from '../queries/homePageQuery';
import { formatArtistNames } from '../utilities/formatArtistNames';
import { useQuery } from '@apollo/client';
import { ItemCarousel } from '../components/ItemCarousel/ItemCarousel';

export default function Home() {
	const { loading: loadingRP, error: errorRP, data: recentlyPlayed } = useQuery(
		GET_RECENTLY_PLAYED
	);
	const { loading: loadingNR, error: errorNR, data: newReleases } = useQuery(
		GET_NEW_RELEASES
	);
	const {
		loading: loadingFP,
		error: errorFP,
		data: featuredPlaylists
	} = useQuery(GET_FEATURED_PLAYLISTS, { variables: { country: '' } });

	return (
		<div className="pb-10">
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<MainSection header="Home">
						<Section title="Recently Played">
							{recentlyPlayed && (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{recentlyPlayed.getRecentlyPlayed.map(
										(track, i) => (
											<Card
												key={i}
												header={track.track.name}
												text={formatArtistNames(
													track.track.artists,
													track.track.artists.length
												)}
												image={track.track.album.images[0].url}
											/>
										)
									)}
								</ItemCarousel>
							)}
						</Section>
						<Section title="New Releases">
							{newReleases && (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{newReleases.getNewReleases.map((release, i) => (
										<Card
											key={i}
											header={release.name}
											image={release.images[0].url}
											text={formatArtistNames(
												release.artists,
												release.artists.length
											)}
										/>
									))}
								</ItemCarousel>
							)}
						</Section>
						<Section title="Featured Playlists">
							{featuredPlaylists && (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{featuredPlaylists.getFeaturedPlaylists.map(
										(playlist, i) => (
											<Card
												key={i}
												header={playlist.name}
												text=""
												image={playlist.images[0].url}
											/>
										)
									)}
								</ItemCarousel>
							)}
						</Section>
					</MainSection>
				</Layout>
			</main>
		</div>
	);
}
