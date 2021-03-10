export interface TrackListInterface {
	trackData: (TrackInterface | PlaylistInterface)[];
	type: 'playlist' | 'track' | 'savedTrack';
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
		name: string;
	};
	artists: string[];
	name: string;
	id: string;
	uri: string;
	releaseDate: string;
}
