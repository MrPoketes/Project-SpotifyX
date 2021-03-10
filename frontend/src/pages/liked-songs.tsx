import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { Button } from '../components/Button/Button';
import { ClockIcon, ThumbsUpIcon } from '../components/Icons/Icons';
import { Layout } from '../components/Layout/Layout';
import { TrackList } from '../components/TrackList/TrackList';
import { GET_SAVED_TRACKS } from '../queries/savedQuery';

export default function LikedSongs() {
	const { loading, error, data } = useQuery(GET_SAVED_TRACKS);
	let trackData = null;
	if (data && data.getSavedTracks.length > 0) {
		trackData = data.getSavedTracks.reduce((tracks, t) => {
			let trackObj = t.track;
			trackObj = Object.assign({}, trackObj, {
				releaseDate: t.added_at
			});
			return [...tracks, trackObj];
		}, []);
	}
	return (
		<div>
			<Head>
				<title>SpotifyX</title>
			</Head>
			<main>
				<Layout>
					<div className="text-4xl font-bold mt-10 mb-5">
						<h1>Liked songs</h1>
						<Button className="bg-green-500 mt-5">Play</Button>
					</div>

					{data && (
						<>
							{data.getSavedTracks.length > 0 ? (
								<TrackList
									type="playlist"
									trackData={trackData}
									columns={[
										'#',
										'Title',
										'Artist',
										'Album',
										'Date',
										<ClockIcon />,
										<ThumbsUpIcon />
									]}
								/>
							) : (
								<div className="text-2xl mt-5 text-center">
									No liked songs found
								</div>
							)}
						</>
					)}
				</Layout>
			</main>
		</div>
	);
}
