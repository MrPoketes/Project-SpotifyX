import express from 'express';
import passport from 'passport';
import Strategy from 'passport-spotify';
import jsonfile from 'jsonfile';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'apollo-server';
import typeDefs from './graphql/schema/typeDefs';
import { resolvers } from './graphql/resolvers';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8888;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
	schema,
	context: () => {
		const data = jsonfile.readFileSync('token.json');
		return { accessToken: data.accessToken };
	}
});
/**
 * Authentication
 */

app.use(passport.initialize());
app.use(passport.session());
server.applyMiddleware({ app });

const SpotifyStrategy = Strategy.Strategy;

const redirect_uri =
	process.env.REDIRECT_URI || 'http://localhost:8888/auth/spotify/callback';

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});

let token = '';

passport.use(
	new SpotifyStrategy(
		{
			clientID: process.env.SPOTIFY_CLIENT_ID,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
			callbackURL: redirect_uri
		},
		(accessToken, refreshToken, expires_in, profile, done: any) => {
			token = accessToken;
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
	)
);

app.get(
	'/auth/spotify',
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
	} as any)
);

app.get(
	'/auth/spotify/callback',
	passport.authenticate('spotify', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('http://localhost:3000' + '?access_token=' + token);
	}
);

app.get('/getToken', (req, res) => {
	const token = jsonfile.readFileSync('token.json');
	res.send(token.accessToken);
});

app.use(cors());

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`Graphql url: http://localhost:8888${server.graphqlPath}`);
});
