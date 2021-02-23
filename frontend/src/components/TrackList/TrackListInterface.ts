export interface TrackListInterface {
	trackData: TrackInterface[];
}

export interface TrackInterface {
	duration_ms: number;
	explicit: boolean;
	id: string;
	name: string;
	uri: string;
}
