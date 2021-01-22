import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export const AccessToken = React.createContext('');

function MyApp({ Component, pageProps }: AppProps) {
	const [token, setToken] = useState('');
	const client = new ApolloClient({
		uri: 'http://localhost:8888/graphql',
		cache: new InMemoryCache()
	});

	const handleToken = (accessToken: string): void => {
		setToken(accessToken);
	};

	return (
		<ApolloProvider client={client}>
			<AccessToken.Provider value={token}>
				<Component
					{...pageProps}
					addToken={accessToken => handleToken(accessToken)}
				/>
			</AccessToken.Provider>
		</ApolloProvider>
	);
}

export default MyApp;
