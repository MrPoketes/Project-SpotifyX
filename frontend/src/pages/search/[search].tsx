import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { LoadingIcon } from '../../components/Icons/Icons';
import { Layout } from '../../components/Layout/Layout';
import { SEARCH } from '../../queries/searchQuery';
import { SearchResultCategory } from './helpers/SearchResultCategory';

export default function Search({ search }) {
	const { data } = useQuery(SEARCH, { variables: { query: search } });

	const checkLengths = (): boolean => {
		return (
			data.search.tracks.length > 0 ||
			data.search.artists.length > 0 ||
			data.search.albums.length > 0 ||
			data.search.playlists.length > 0 ||
			data.search.shows.length > 0
		);
	};

	return (
		<div>
			<Head>
				<title>SpotifyX - Search</title>
			</Head>
			<main>
				<Layout>
					<div className="text-center text-3xl font-bold my-5">
						Search results for {search}
					</div>
					{data ? (
						<>
							{checkLengths() ? (
								<div className="grid grid-cols-2">
									{data.search.tracks.length > 0 && (
										<SearchResultCategory
											title="Tracks"
											category={data.search.tracks}
										/>
									)}
									{data.search.artists.length > 0 && (
										<SearchResultCategory
											title="Artists"
											category={data.search.artists}
										/>
									)}
									{data.search.albums.length > 0 && (
										<SearchResultCategory
											title="Albums"
											category={data.search.albums}
										/>
									)}
									{data.search.playlists.length > 0 && (
										<SearchResultCategory
											title="Playlists"
											category={data.search.playlists}
										/>
									)}
									{data.search.shows.length > 0 && (
										<SearchResultCategory
											title="Podcasts"
											category={data.search.shows}
										/>
									)}
								</div>
							) : (
								<div className="text-center text-xl font-bold">
									<h1>No results found :( </h1>
									<h1>Try searching something else</h1>
								</div>
							)}
						</>
					) : (
						<div className="flex justify-center mt-20">
							<LoadingIcon className="h-48 w-48" />
						</div>
					)}
				</Layout>
			</main>
		</div>
	);
}

Search.getInitialProps = ({ query: { search } }) => {
	return { search };
};
