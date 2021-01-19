const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers/index.js');
const typeDefs = require('./graphql/schema/typeDefs');
const jsonfile = require('jsonfile');
const authRoutes = require('./routes/authentication');
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const PORT = process.env.PORT || 8888;
const app = express();

/**
 * Defining ApolloServer
 */
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => {
		const data = jsonfile.readFileSync('token.json');
		return { accessToken: data.accessToken };
	}
});

server.applyMiddleware({ app });

/**
 * Authentication
 */

const redirect_uri =
	process.env.REDIRECT_URI || 'http://localhost:8888/auth/spotify/callback';

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});

const spotifyStrategy = new SpotifyStrategy(
	{
		clientID: process.env.SPOTIFY_CLIENT_ID,
		clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		callbackURL: redirect_uri
	},
	(accessToken, refreshToken, expires_in, profile, done) => {
		jsonfile
			.writeFile('token.json', {
				accessToken: accessToken,
				refreshToken: refreshToken,
				expires_in: expires_in
			})
			.then(() => console.log('Write done'))
			.catch(error => console.error(error));

		process.nextTick(() => {
			return done(null, profile);
		});
	}
);
passport.use(spotifyStrategy);

/**
 * Refreshes token after 3500 seconds
 */

if (jsonfile.readFileSync('token.json').accessToken) {
	console.log('here');
	setInterval(async () => {
		const data = jsonfile.readFileSync('token.json');
		const response = await axios({
			method: 'POST',
			url: 'https://accounts.spotify.com/api/token',
			data: qs.stringify({
				grant_type: 'refresh_token',
				refresh_token: data.refreshToken,
				client_id: process.env.SPOTIFY_CLIENT_ID,
				client_secret: process.env.SPOTIFY_CLIENT_SECRET
			}),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		jsonfile
			.writeFile('token.json', {
				accessToken: response.data.access_token,
				refreshToken: response.data.refresh_token,
				expires_in: response.data.expires_in
			})
			.then(() => console.log('Success'))
			.catch(error => console.error(error));
	}, 3500000);
}

/**
 * App use
 */

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.listen(PORT, () =>
	console.log(
		`Listening on port ${PORT}, Graphql url: http://localhost:8888${server.graphqlPath}`
	)
);
