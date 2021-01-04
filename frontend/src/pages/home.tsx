import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { MainSection } from '../components/MainSection/MainSection';
import { Section } from '../components/Section/Section';

export default function Home() {
	const [userData, setUser] = useState(null);

	useEffect(() => {
		if (userData === null) {
			fetch('http://localhost:3000/api/auth/session')
				.then(res => res.json())
				.then(data => {
					setUser(data.user);
				});
		}
	});

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<MainSection header="Home">
						<Section title="Shortcuts"></Section>
						<Section title="Recently Played"></Section>
						<Section title="Popular Playlists"></Section>
					</MainSection>
				</Layout>
			</main>
		</div>
	);
}
