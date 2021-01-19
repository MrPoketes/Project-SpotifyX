const { gql } = require('apollo-server-express');
const Album = require('./Album');
const Artist = require('./Artist');
const AudioFeatures = require('./AudioFeatures');
const Category = require('./Category');
const Context = require('./Context');
const Copyright = require('./Copyright');
const CurrentlyPlaying = require('./CurrentlyPlaying');
const CurrentlyPlayingContext = require('./CurrentlyPlayingContext');
const Cursor = require('./Cursor');
const Device = require('./Device');
const Disallows = require('./Disallows');
const Episode = require('./Episode');
const Error = require('./Error');
const ExplicitContentSettings = require('./ExplicitContentSettings');
const ExternalIds = require('./ExternalIds');
const ExternalUrls = require('./ExternalUrls');
const Followers = require('./Followers');
const Image = require('./Image');
const LinkedTrack = require('./LinkedTrack');
const Me = require('./Me');
const Paging = require('./Paging');
const PlayerError = require('./PlayerError');
const PlayHistory = require('./PlayHistory');
const Playlist = require('./Playlist');
const PlaylistTrack = require('./PlaylistTrack');
const PlaylistTracksRef = require('./PlaylistTracksRef');
const Recommendations = require('./Recommendations');
const RecommendationsSeed = require('./RecommendationSeed');
const ResumePoint = require('./ResumePoint');
const SavedAlbum = require('./SavedAlbum');
const SavedTrack = require('./SavedTrack');
const SavedShow = require('./SavedShow');
const Show = require('./Show');
const Track = require('./Track');
const TuneableTrack = require('./TuneableTrack');
const User = require('./User');

const typeDefs = gql`
	type Query {
		getMe: Me

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
		# A search can give a lot of different objects.
		# So we return a string and in frontend use JSON.parse to get an object
		search(query: String, type: String): String

		getShows(ids: String): [Show]
		getShow(id: String): Show
		getShowEpisode(id: String): [Episode]

		getTracks(ids: String): [Track]
		getTrack(id: String): Track
		getAudioFeaturesTracks(ids: String): [AudioFeatures]
		getAudioFeaturesTrack(id: String): AudioFeatures

		getUser(id: String): User
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
		createPlaylist(id: String, body: PlaylistBodyInput): Playlist

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

module.exports = [
	typeDefs,
	Me,
	Album,
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
