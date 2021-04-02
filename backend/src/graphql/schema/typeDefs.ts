import { gql } from 'apollo-server-express';
import Search from './Search';
import Album from './Album';
import Artist from './Artist';
import AudioFeatures from './AudioFeatures';
import Category from './Category';
import Context from './Context';
import Copyright from './Copyright';
import CurrentlyPlaying from './CurrentlyPlaying';
import CurrentlyPlayingContext from './CurrentlyPlayingContext';
import Cursor from './Cursor';
import Device from './Device';
import Disallows from './Disallows';
import Episode from './Episode';
import Error from './Error';
import ExplicitContentSettings from './ExplicitContentSettings';
import ExternalIds from './ExternalIds';
import ExternalUrls from './ExternalUrls';
import Followers from './Followers';
import Image from './Image';
import LinkedTrack from './LinkedTrack';
import Me from './Me';
import Paging from './Paging';
import PlayerError from './PlayerError';
import PlayHistory from './PlayHistory';
import Playlist from './Playlist';
import PlaylistTrack from './PlaylistTrack';
import PlaylistTracksRef from './PlaylistTracksRef';
import Recommendations from './Recommendations';
import RecommendationsSeed from './RecommendationSeed';
import ResumePoint from './ResumePoint';
import SavedAlbum from './SavedAlbum';
import SavedTrack from './SavedTrack';
import SavedShow from './SavedShow';
import Show from './Show';
import Track from './Track';
import TuneableTrack from './TuneableTrack';
import User from './User';

const typeDefs = gql`
	type Query {
		getAlbums(ids: String): [Album]
		getAlbum(id: String): Album
		getAlbumTracks(id: String): [Track]

		getArtists(ids: String): [Artist]
		getArtist(id: String): Artist
		getArtistTop(id: String, market: String): [Track]
		getArtistRelated(id: String): [Artist]
		getArtistAlbums(id: String): [Album]

		getNewReleases(country: String): [Album]
		getFeaturedPlaylists(country: String): [Playlist]
		getAllCategories(country: String): [Category]
		getCategory(id: String, country: String): Category
		getCategoryPlaylists(id: String, country: String): [Playlist]
		getRecommendations(
			seed_artists: String
			seed_genres: String
			seed_tracks: String
		): Recommendations
		getRecommendationGenres: [String]

		getEpisodes(ids: String): [Episode]
		getEpisode(id: String): Episode

		checkUserFollowsPlaylist(playlist_id: String, ids: String): [Boolean]
		getFollowedArtists(type: String): [Artist]
		checkFollowingArtistsUsers(playlist_id: String, ids: String): [Boolean]

		getSavedAlbums: [SavedAlbum]
		checkUsersSavedAlbums(ids: String): [Boolean]
		getSavedTracks: [SavedTrack]
		checkUsersSavedTracks(ids: String): [Boolean]
		getSavedShows: [SavedShow]
		checkUsersSavedShows(ids: String): [Boolean]

		getTopArtistsTracks(type: String): String

		getCurrentPlayback: CurrentlyPlayingContext
		getAvailableDevices: [Device]
		# Use JSON.parse to access json of returned data
		getCurrentlyPlaying(market: String): String
		getRecentlyPlayed: [PlayHistory]

		getCurrentUserPlaylists: [Playlist]
		getUserPlaylists(id: String): [Playlist]
		getPlaylist(id: String): Playlist
		getPlaylistItems(id: String, market: String): String
		getPlaylistCover(id: String): [Image]

		search(query: String): Search

		getShows(ids: String): [Show]
		getShow(id: String): Show
		getShowEpisode(id: String): [Episode]

		getTracks(ids: String): [Track]
		getTrack(id: String): Track
		getAudioFeaturesTracks(ids: String): [AudioFeatures]
		getAudioFeaturesTrack(id: String): AudioFeatures

		getUser(id: String): User
		getMe: Me

		checkIfUserFollows(type: String, id: String): [Boolean]
	}

	input PlaylistBodyInput {
		name: String
		description: String
		public: Boolean
	}

	input TrackInput {
		tracks: [ItemInput]
	}
	input ItemInput {
		uri: String
		positions: [Int]
	}

	type Mutation {
		addItemsPlaylist(id: String, position: Int, uris: String): String
		# TODO implement
		reorderPlaylist: String
		removeItemPlaylist(id: String, body: TrackInput): String
		changePlaylistDetails(id: String, body: PlaylistBodyInput): String
		createPlaylist(
			id: String
			name: String
			description: String
			public: Boolean
		): Playlist

		addToQueue(uri: String, id: String): String
		startPlayer(id: String): String
		pausePlayer(id: String): String
		skipToNextTrack: String
		skipToPreviousTrack: String
		seek(position: Int): String
		setRepeat(state: String): String
		setVolume(volume: Int, id: String): String
		toggleShuffle(state: Boolean): String

		saveShows(ids: String): String
		removeSavedShows(ids: String): String

		saveTracks(ids: String): String
		removeSavedTracks(ids: String): String

		saveAlbums(ids: String): String
		removeSavedAlbums(ids: String): String

		followArtistsUsers(type: String, ids: String): String
		unfollowArtistsUsers(type: String, ids: String): String

		followPlaylist(id: String): String
		unfollowPlaylist(id: String): String
	}
`;

export default [
	typeDefs,
	Me,
	Album,
	Search,
	Artist,
	AudioFeatures,
	Category,
	Context,
	Copyright,
	CurrentlyPlaying,
	CurrentlyPlayingContext,
	Cursor,
	Device,
	Disallows,
	Episode,
	Error,
	ExplicitContentSettings,
	ExternalIds,
	ExternalUrls,
	LinkedTrack,
	Paging,
	PlayerError,
	PlayHistory,
	Playlist,
	PlaylistTrack,
	PlaylistTracksRef,
	Recommendations,
	RecommendationsSeed,
	ResumePoint,
	SavedAlbum,
	SavedShow,
	SavedTrack,
	Show,
	Track,
	TuneableTrack,
	Followers,
	Image,
	User
];
