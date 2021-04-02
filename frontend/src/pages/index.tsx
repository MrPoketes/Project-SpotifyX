import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import queryString from 'query-string';
import { AccessToken } from './_app';

export default function Authentication(props) {
	const router = useRouter();
	const token = useContext(AccessToken);

	useEffect(() => {
		const parsed = queryString.parse(window.location.search);
		if (parsed.access_token) {
			props.addToken(parsed.access_token);
			router.push('/home');
		} else if (token !== '') {
			router.push('/home');
		}
	});

	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<div className="flex justify-center mt-10">
					<a href="http://localhost:8888/auth/spotify">
						<button className="text-white">Log in</button>
					</a>
				</div>
			</main>
		</div>
	);
}
