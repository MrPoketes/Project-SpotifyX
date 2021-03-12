export interface CardInterface {
	image: string;
	header: string;
	artists: ArtistInterface[];
	isArtist?: boolean;
	artistId?: string;
	playlistId?: string;
	albumId?: string;
}
export interface ArtistInterface {
	id: string;
	name: string;
}
