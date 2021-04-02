export interface CardInterface {
	image: string;
	header: string;
	isArtist?: boolean;
	href: string;
	asHref: string;
	artistText?: JSX.Element;
	showControls: boolean;
}
export interface ArtistInterface {
	id: string;
	name: string;
}
