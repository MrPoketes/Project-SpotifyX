import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
require('dotenv').config();

const options = {
	site: process.env.NEXTAUTH_URL,
	profile: profile => {
		return {
			id: profile.id,
			name: profile.display_name,
			email: profile.email,
			image: profile.images.length > 0 ? profile.images[0].url : undefined
		};
	},
	providers: [
		Providers.Spotify({
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET
		})
	],
	callbacks: {
		async jwt(token, _, account) {
			if (account) {
				token.id = account.id;
				token.accessToken = account.accessToken;
			}
			return token;
		},
		async session(session, user) {
			session.user = user;
			return session;
		}
	}
};
export default (req, res) => {
	NextAuth(req, res, options);
};
