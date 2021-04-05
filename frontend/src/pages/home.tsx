import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { MainSection } from '../components/MainSection/MainSection';
import { Section } from '../components/Section/Section';
import { Card } from '../components/Card/Card';
import {
	GET_RECENTLY_PLAYED,
	GET_NEW_RELEASES,
	GET_FEATURED_PLAYLISTS,
	GET_TOP_ARTISTS_OR_TRACKS
} from '../queries/homePageQuery';
import { useQuery } from '@apollo/client';
import { ItemCarousel } from '../components/ItemCarousel/ItemCarousel';
import { LoadingIcon } from '../components/Icons/Icons';
import { CardArtistText } from '../components/Card/helpers/CardArtistText';
import Link from 'next/link';

export default function Home() {
	const { data: recentlyPlayed } = useQuery(GET_RECENTLY_PLAYED);
	const { data: newReleases } = useQuery(GET_NEW_RELEASES);
	const { data: featuredPlaylists } = useQuery(GET_FEATURED_PLAYLISTS, {
		variables: { country: '' }
	});
	const { data: topArtists } = useQuery(GET_TOP_ARTISTS_OR_TRACKS, {
		variables: { type: 'artists' }
	});

	return (
		<div className="pb-10">
			<Head>
				<title>SpotifyX - Home</title>
			</Head>
			<main>
				<Layout>
					<MainSection header="Home">
						<Section title="Recently Played">
							{recentlyPlayed &&
							recentlyPlayed.getRecentlyPlayed.length > 0 ? (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{recentlyPlayed.getRecentlyPlayed.map(
										(track, i) => (
											<Link
												key={i}
												href="/album/[album]"
												as={`/album/${track.track.album.id}`}
											>
												<div>
													<Card
														id={track.track.id}
														type="track"
														showControls={true}
														header={track.track.name}
														image={
															track.track.album.images
																.length > 0
																? track.track.album
																		.images[0].url
																: ''
														}
														artistText={
															<CardArtistText
																artists={
																	track.track.artists
																}
															/>
														}
													/>
												</div>
											</Link>
										)
									)}
								</ItemCarousel>
							) : (
								<div className="flex justify-center w-full p-10">
									<LoadingIcon className="w-16 h-16" />
								</div>
							)}
						</Section>
						<Section title="New Releases">
							{newReleases ? (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{newReleases.getNewReleases.map((release, i) => (
										<Link
											key={i}
											href="/album/[album]"
											as={`/album/${release.id}`}
										>
											<div>
												<Card
													id={release.id}
													type="album"
													showControls={true}
													key={i}
													header={release.name}
													image={
														release.images.length > 0
															? release.images[0].url
															: ''
													}
													artistText={
														<CardArtistText
															artists={release.artists}
														/>
													}
												/>
											</div>
										</Link>
									))}
								</ItemCarousel>
							) : (
								<div className="flex justify-center w-full p-10">
									<LoadingIcon className="w-16 h-16" />
								</div>
							)}
						</Section>
						<Section title="Featured Playlists">
							{featuredPlaylists ? (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{featuredPlaylists.getFeaturedPlaylists.map(
										(playlist, i) => (
											<Link
												key={i}
												href="/playlist/[playlist]"
												as={`/playlist/${playlist.id}`}
											>
												<div>
													<Card
														id={playlist.id}
														type="playlist"
														showControls={true}
														key={i}
														header={playlist.name}
														image={
															playlist.images.length > 0
																? playlist.images[0].url
																: ''
														}
													/>
												</div>
											</Link>
										)
									)}
								</ItemCarousel>
							) : (
								<div className="flex justify-center w-full p-10">
									<LoadingIcon className="w-16 h-16" />
								</div>
							)}
						</Section>
						<Section title="Your Top Artists">
							{topArtists &&
							JSON.parse(topArtists.getTopArtistsTracks).items.length >
								0 ? (
								<ItemCarousel noToShow={6} noToScrool={2}>
									{JSON.parse(
										topArtists.getTopArtistsTracks
									).items.map((item, i) => (
										<Link
											key={i}
											href="/artist/[artist]"
											as={`/artist/${item.id}`}
										>
											<div>
												<Card
													id={item.id}
													type="artist"
													showControls={true}
													isArtist={true}
													key={i}
													header={item.name}
													image={
														item.images.length > 0
															? item.images[0].url
															: ''
													}
												/>
											</div>
										</Link>
									))}
								</ItemCarousel>
							) : (
								<div className="flex justify-center w-full p-10">
									<LoadingIcon className="w-16 h-16" />
								</div>
							)}
						</Section>
					</MainSection>
				</Layout>
			</main>
		</div>
	);
}
