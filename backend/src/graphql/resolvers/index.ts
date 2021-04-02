import * as albums from '../api/albums';
import * as artists from '../api/artists';
import * as browse from '../api/browse';
import * as episodes from '../api/episodes';
import * as follow from '../api/follow';
import * as library from '../api/library';
import * as player from '../api/player';
import * as playlists from '../api/playlists';
import * as search from '../api/search';
import * as shows from '../api/shows';
import * as tracks from '../api/tracks';
import * as users from '../api/users';

const checkToken = token => {
	if (token) {
		return true;
	}
	return false;
};

export const resolvers = {
	Query: {
		// Albums

		getAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return albums.getSeveralAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		getAlbum: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return albums.getAlbum(ctx.accessToken, args.id);
			}
			return null;
		},
		getAlbumTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return albums.getAlbumTracks(ctx.accessToken, args.id);
			}
			return null;
		},

		// Artists

		getArtists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return artists.getArtists(ctx.accessToken, args.ids);
			}
			return null;
		},
		getArtist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return artists.getArtist(ctx.accessToken, args.id);
			}
			return null;
		},
		getArtistTop: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return artists.getArtistTopTracks(
					ctx.accessToken,
					args.id,
					args.market
				);
			}
			return null;
		},
		getArtistRelated: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return artists.getArtistsRelatedArtists(ctx.accessToken, args.id);
			}
			return null;
		},
		getArtistAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return artists.getArtistAlbums(ctx.accessToken, args.id);
			}
			return null;
		},

		// Browse

		getNewReleases: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getNewReleases(ctx.accessToken, args.country);
			}
			return null;
		},
		getFeaturedPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getFeaturedPlaylists(ctx.accessToken, args.country);
			}
			return null;
		},
		getAllCategories: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getBrowseCategories(ctx.accessToken, args.country);
			}
			return null;
		},
		getCategory: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getBrowseCategory(ctx.accessToken, args.id, args.country);
			}
			return null;
		},
		getCategoryPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getCategoryPlaylists(
					ctx.accessToken,
					args.id,
					args.country
				);
			}
			return null;
		},
		getRecommendations: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return browse.getRecommendations(
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
				return browse.getAvailableGenreSeeds(ctx.accessToken);
			}
			return null;
		},

		// Episodes

		getEpisodes: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return episodes.getSeveralEpisodes(ctx.accessToken, args.ids);
			}
			return null;
		},
		getEpisode: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return episodes.getEpisode(ctx.accessToken, args.id);
			}
			return null;
		},

		// Follow

		checkUserFollowsPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.checkIfUsersFollowPlaylist(
					ctx.accessToken,
					args.playlist_id,
					args.ids
				);
			}
			return null;
		},
		getFollowedArtists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.getFollowedArtists(ctx.accessToken, args.type);
			}
			return null;
		},
		checkIfUserFollows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.checkIfUserFollows(ctx.accessToken, args.type, args.id);
			}
			return null;
		},

		// Library
		// checkFollowingArtistsUsers
		getSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.getSavedAlbums(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.checkSavedAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		getSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.getSavedTracks(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.checkSavedTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.getSavedShows(ctx.accessToken);
			}
			return null;
		},
		checkUsersSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				// TODO: implement
				return null;
				// return actions.checkUsersSavedShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		getTopArtistsTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.getTopArtistsAndTracks(ctx.accessToken, args.type);
			}
			return null;
		},

		// Player

		getCurrentPlayback: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.getInfoCurrentPlayback(ctx.accessToken);
			}
			return null;
		},
		getAvailableDevices: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.getAvailableDevices(ctx.accessToken);
			}
			return null;
		},
		getCurrentlyPlaying: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.getCurrentlyPlayingTrack(ctx.accessToken, args.market);
			}
			return null;
		},
		getRecentlyPlayed: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.getRecentlyPlayedTracks(ctx.accessToken);
			}
			return null;
		},

		// Playlists

		getCurrentUserPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.getCurrentUserPlaylists(ctx.accessToken);
			}
			return null;
		},
		getUserPlaylists: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.getUserPlaylists(ctx.accessToken, args.id);
			}
			return null;
		},
		getPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.getPlaylist(ctx.accessToken, args.id);
			}
			return null;
		},
		getPlaylistItems: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.getPlaylistItems(
					ctx.accessToken,
					args.id,
					args.market
				);
			}
			return null;
		},
		getPlaylistCover: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.getPlaylistImage(ctx.accessToken, args.id);
			}
			return null;
		},

		// Search

		search: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return search.search(ctx.accessToken, args.query);
			}
			return null;
		},

		// Shows

		getShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return shows.getShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		getShow: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return shows.getShow(ctx.accessToken, args.id);
			}
			return null;
		},
		getShowEpisode: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return shows.getShowEpisodes(ctx.accessToken, args.id);
			}
			return null;
		},

		// Tracks

		getTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return tracks.getTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return tracks.getTrack(ctx.accessToken, args.id);
			}
			return null;
		},
		getAudioFeaturesTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return tracks.getAudioFeaturesSeveralTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		getAudioFeaturesTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return tracks.getAudioFeaturesTrack(ctx.accessToken, args.id);
			}
			return null;
		},

		// Users

		getUser: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return users.getUser(ctx.accessToken, args.id);
			}
			return null;
		},
		getMe: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return users.getMe(ctx.accessToken);
			}
			return null;
		}
	},

	Mutation: {
		// Playlists

		createPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.createPlaylist(
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
				return playlists.addItemsToPlaylist(
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
				return playlists.removePlaylistItems(
					ctx.accessToken,
					args.id,
					args.body
				);
			}
			return null;
		},
		// TODO: implement once drag and drop has been implemented in frontend
		// reorderPlaylist
		changePlaylistDetails: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return playlists.modifyPlaylistDetails(
					ctx.accessToken,
					args.id,
					args.body
				);
			}
			return null;
		},

		// Player

		addToQueue: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.queueTrack(ctx.accessToken, args.uri, args.id);
			}
			return null;
		},
		startPlayer: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.play(ctx.accessToken, args.id);
			}
			return null;
		},
		pausePlayer: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.pause(ctx.accessToken, args.id);
			}
			return null;
		},
		skipToNextTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.skipToNextTrack(ctx.accessToken);
			}
			return null;
		},
		skipToPreviousTrack: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.skipToPreviousTrack(ctx.accessToken);
			}
			return null;
		},
		seek: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.seek(ctx.accessToken, args.position);
			}
			return null;
		},
		setRepeat: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.repeat(ctx.accessToken, args.state);
			}
			return null;
		},
		setVolume: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.setVolume(ctx.accessToken, args.volume, args.id);
			}
			return null;
		},
		toggleShuffle: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return player.shuffle(ctx.accessToken, args.state);
			}
			return null;
		},

		// Library

		saveShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.saveShows(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedShows: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.removeSavedShows(ctx.accessToken, args.ids);
			}
			return null;
		},

		saveTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.saveTracks(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedTracks: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.removeTracks(ctx.accessToken, args.ids);
			}
			return null;
		},

		saveAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.saveAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},
		removeSavedAlbums: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return library.removeAlbums(ctx.accessToken, args.ids);
			}
			return null;
		},

		// Follow

		followArtistsUsers: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.followArtistsOrUsers(
					ctx.accessToken,
					args.type,
					args.ids
				);
			}
			return null;
		},
		unfollowArtistsUsers: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.unfollowAristsOrUsers(
					ctx.accessToken,
					args.type,
					args.ids
				);
			}
			return null;
		},
		followPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.followPlaylist(ctx.accessToken, args.id);
			}
			return null;
		},
		unfollowPlaylist: (parent, args, ctx, info) => {
			if (checkToken(ctx.accessToken)) {
				return follow.unfollowPlaylist(ctx.accessToken, args.id);
			}
			return null;
		}
	}
};
