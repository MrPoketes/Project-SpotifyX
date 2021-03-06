export const formatArtistNames = (list, length: number) => {
	return list.reduce((artists, artist, i) => {
		if (i !== length - 1) {
			return [...artists, `${artist.name}, `];
		}
		return [...artists, artist.name];
	}, []);
};
