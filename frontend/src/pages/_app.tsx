import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SpotifyPlayer from 'react-spotify-web-playback';

export const AccessToken = React.createContext('');
let tokens = '';
function MyApp({ Component, pageProps }: AppProps) {
	const [token, setToken] = useState('');

	const client = new ApolloClient({
		uri: 'http://localhost:8888/graphql',
		cache: new InMemoryCache()
	});

	const handleToken = (accessToken: string): void => {
		setToken(accessToken);
		tokens = accessToken;
	};

	return (
		<ApolloProvider client={client}>
			<AccessToken.Provider value={token}>
				<Component
					{...pageProps}
					addToken={accessToken => handleToken(accessToken)}
				/>
				{tokens !== '' && (
					<div className="fixed bottom-0 w-full">
						<SpotifyPlayer
							token={tokens}
							uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
						/>
					</div>
				)}
			</AccessToken.Provider>
		</ApolloProvider>
	);
}

export default MyApp;
