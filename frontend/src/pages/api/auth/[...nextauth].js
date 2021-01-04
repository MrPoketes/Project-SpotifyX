import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
require('dotenv').config();

const options = {
	site: process.env.NEXTAUTH_URL,
	providers: [
		Providers.Spotify({
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET
		})
	],
	callbacks: {
		signIn: async (user, account, profile) => {
			return Promise.resolve(true);
		},
		redirect: async (url, baseUrl) => {
			return Promise.resolve(baseUrl);
		},
		session: async (session, user) => {
			return Promise.resolve(session);
		},
		jwt: async (token, user, account, profile, isNewUser) => {
			return Promise.resolve(token);
		}
	}
};
export default (req, res) => {
	NextAuth(req, res, options);
};
