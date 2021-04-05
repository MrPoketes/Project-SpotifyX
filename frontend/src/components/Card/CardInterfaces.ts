export interface CardInterface {
	image: string;
	id: string;
	header: string;
	isArtist?: boolean;
	artistText?: JSX.Element;
	showControls: boolean;
	type?: 'playlist' | 'artist' | 'user' | 'album' | 'track' | 'show';
}
export interface ArtistInterface {
	id: string;
	name: string;
}
