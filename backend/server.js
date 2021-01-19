const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers/index.js');
const typeDefs = require('./graphql/schema/typeDefs');
const jsonfile = require('jsonfile');
const authRoutes = require('./routes/authentication');
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

passport.use(
	new SpotifyStrategy(
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
				.then(res => console.log('Write done'))
				.catch(error => console.error(error));

			process.nextTick(() => {
				return done(null, profile);
			});
		}
	)
);

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
