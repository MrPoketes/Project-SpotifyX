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
const SavedShow = require('./SavedShow');
const Show = require('./Show');
const Track = require('./Track');
const TuneableTrack = require('./TuneableTrack');
const User = require('./User');

const typeDefs = gql`
	type Query {
		Me: Me
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
	Show,
	Track,
	TuneableTrack,
	Followers,
	Image,
	User
];
