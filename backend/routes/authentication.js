const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
	'/spotify',
	passport.authenticate('spotify', {
		scope: [
			'user-read-private',
			'user-read-email',
			'ugc-image-upload',
			'user-read-recently-played',
			'user-top-read',
			'user-read-playback-position',
			'user-read-playback-state',
			'user-modify-playback-state',
			'user-read-currently-playing',
			'app-remote-control',
			'streaming',
			'playlist-modify-public',
			'playlist-modify-private',
			'playlist-read-private',
			'playlist-read-collaborative',
			'user-follow-modify',
			'user-follow-read',
			'user-library-modify',
			'user-library-read',
			'user-read-email',
			'user-read-private'
		],
		showDialog: true
	})
);

router.get(
	'/spotify/callback',
	passport.authenticate('spotify', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('http://localhost:3000');
	}
);

module.exports = router;
