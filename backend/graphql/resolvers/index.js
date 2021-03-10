const actions = require('../api/index.js');

const checkToken = token => {
	if (token) {
		return true;
	}
	return false;
};

const resolvers = {
	Query: {
		getMe: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getMe(ctx.accessToken);
			}
			return null;
		},

		getAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getSeveralAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		getAlbum: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAlbum(ctx.accessToken, args.id);
			}
			return null;
		},
		getAlbumTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAlbumTracks(ctx.accessToken, args.id);
			}
			return null;
		},

		getArtists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getArtists(ctx.accessToken, args.ids);
			}
			return null;
		},
		getArtist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getArtist(ctx.accessToken, args.id);
			}
			return null;
		},
		getArtistTop: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getArtistTopTracks(
					ctx.accessToken,
					args.id,
					args.market
				);
			}
			return null;
		},
		getArtistRelated: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getArtistsRelatedArtists(ctx.accessToken, args.id);
			}
			return null;
		},
		getArtistAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getArtistAlbums(ctx.accessToken, args.id);
			}
			return null;
		},

		getNewReleases: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getNewReleases(ctx.accessToken, args.country);
			}
			return null;
		},
		getFeaturedPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getFeaturedPlaylists(ctx.accessToken, args.country);
			}
			return null;
		},
		getAllCategories: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getBrowseCategories(ctx.accessToken, args.country);
			}
			return null;
		},
		getCategory: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getBrowseCategory(
					ctx.accessToken,
					args.id,
					args.country
				);
			}
			return null;
		},
		getCategoryPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getCategoryPlaylists(
					ctx.accessToken,
					args.id,
					args.country
				);
			}
			return null;
		},
		getRecommendations: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getRecommendations(
					ctx.accessToken,
					args.seed_artists,
					args.seed_genres,
					args.seed_tracks
				);
			}
			return null;
		},
		getRecommendationGenres: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAvailableGenreSeeds(ctx.accessToken);
			}
			return null;
		},
		getEpisodes: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getSeveralEpisodes(ctx.accessToken, args.ids);
			}
			return null;
		},
		getEpisode: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getEpisode(ctx.accessToken, args.id);
			}
			return null;
		},

		checkUserFollowsPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.checkIfUsersFollowPlaylist(
					ctx.accessToken,
					args.playlist_id,
					args.ids
				);
			}
			return null;
		},
		getFollowedArtists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getFollowedArtists(ctx.accessToken, args.type);
			}
			return null;
		},
		checkIfUserFollows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.checkIfUserFollows(ctx.accessToken, args.type, args.id);
			}
			return null;
		},

		// checkFollowingArtistsUsers
		getSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getSavedAlbums(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.checkSavedAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		getSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getSavedTracks(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.checkSavedTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getSavedShows(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.checkUsersSavedShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		getTopArtistsTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getTopArtistsAndTracks(ctx.accessToken, args.type);
			}
			return null;
		},

		getCurrentPlayback: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getInfoCurrentPlayback(ctx.accessToken);
			}
			return null;
		},
		getAvailableDevices: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAvailableDevices(ctx.accessToken);
			}
			return null;
		},
		getCurrentlyPlaying: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getCurrentlyPlayingTrack(ctx.accessToken, args.market);
			}
			return null;
		},
		getRecentlyPlayed: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getRecentlyPlayedTracks(ctx.accessToken);
			}
			return null;
		},

		getCurrentUserPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getCurrentUserPlaylists(ctx.accessToken);
			}
			return null;
		},
		getUserPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getUserPlaylists(ctx.accessToken, args.id);
			}
			return null;
		},
		getPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getPlaylist(ctx.accessToken, args.id);
			}
			return null;
		},
		getPlaylistItems: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getPlaylistItems(ctx.accessToken, args.id, args.market);
			}
			return null;
		},
		getPlaylistCover: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getPlaylistImage(ctx.accessToken, args.id);
			}
			return null;
		},

		search: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.search(ctx.accessToken, args.query, args.type);
			}
			return null;
		},

		getShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		getShow: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getShow(ctx.accessToken, args.id);
			}
			return null;
		},
		getShowEpisode: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getShowEpisodes(ctx.accessToken, args.id);
			}
			return null;
		},

		getTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getTrack(ctx.accessToken, args.id);
			}
			return null;
		},
		getAudioFeaturesTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAudioFeaturesSeveralTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getAudioFeaturesTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getAudioFeaturesTrack(ctx.accessToken, args.id);
			}
			return null;
		},

		getUser: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.getUser(ctx.accessToken, args.id);
			}
			return null;
		}
	},

	Mutation: {
		createPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.createPlaylist(
					ctx.accessToken,
					args.id,
					args.name,
					args.description,
					args.public
				);
			}
			return null;
		},
		addItemsPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.addItemsToPlaylist(
					ctx.accessToken,
					args.id,
					args.position,
					args.uris
				);
			}
			return null;
		},
		removeItemPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.removePlaylistItems(ctx.accessToken, args.id, args.body);
			}
			return null;
		},
		// TODO: implement once drag and drop has been implemented in frontend
		// reorderPlaylist
		changePlaylistDetails: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.modifyPlaylistDetails(
					ctx.accessToken,
					args.id,
					args.body
				);
			}
			return null;
		},

		addToQueue: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.queueTrack(ctx.accessToken, args.uri, args.id);
			}
			return null;
		},
		startPlayer: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.play(ctx.accessToken, args.id);
			}
			return null;
		},
		pausePlayer: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.pause(ctx.accessToken, args.id);
			}
			return null;
		},
		skipToNextTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.skipToNextTrack(ctx.accessToken);
			}
			return null;
		},
		skipToPreviousTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.skipToPreviousTrack(ctx.accessToken);
			}
			return null;
		},
		seek: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.seek(ctx.accessToken, args.position);
			}
			return null;
		},
		setRepeat: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.repeat(ctx.accessToken, args.state);
			}
			return null;
		},
		setVolume: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.setVolume(ctx.accessToken, args.volume, args.id);
			}
			return null;
		},
		toggleShuffle: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.shuffle(ctx.accessToken, args.state);
			}
			return null;
		},

		saveShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.saveShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.removeSavedShows(ctx.accessToken, args.ids);
			}
			return null;
		},

		saveTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.saveTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.removeTracks(ctx.accessToken, args.ids);
			}
			return null;
		},

		saveAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.saveAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.removeAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},

		followArtistsUsers: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.followArtistsOrUsers(
					ctx.accessToken,
					args.type,
					args.ids
				);
			}
			return null;
		},
		unfollowArtistsUsers: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.unfollowAristsOrUsers(
					ctx.accessToken,
					args.type,
					args.ids
				);
			}
			return null;
		},
		followPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.followPlaylist(ctx.accessToken, args.id);
			}
			return null;
		},
		unfollowPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return actions.unfollowPlaylist(ctx.accessToken, args.id);
			}
			return null;
		}
	}
};

module.exports = resolvers;
