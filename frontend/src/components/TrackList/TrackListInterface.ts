export interface TrackListInterface {
	trackData: (TrackInterface | PlaylistInterface)[];
	type: 'playlist' | 'track';
	columns: (string | JSX.Element)[];
}

export interface TrackInterface {
	duration_ms: number;
	explicit: boolean;
	id: string;
	name: string;
	uri: string;
}

export interface PlaylistInterface {
	duration_ms: number;
	album: {
		id: string;
		name: string;
	};
	artists: [
		{
			name: string;
			id: string;
		}
	];
	name: string;
	id: string;
	uri: string;
	releaseDate: string;
}
