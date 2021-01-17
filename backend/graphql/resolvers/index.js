const getMe = require('../api/index.js');

const me = async (parent, {}, ctx, info) => {
	const accessToken = ctx.accessToken;
	if (accessToken) {
		const data = getMe(accessToken);
		return data;
	}
	return null;
};

const resolvers = {
	Query: {
		Me: (parent, args, ctx, info) => me(parent, args, ctx, info)
	}
};

module.exports = resolvers;
