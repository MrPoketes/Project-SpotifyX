export interface HeaderInterface {
	type: string;
	name: string;
	followers: number;
	image: string;
	id: string;
	isOverview: boolean;
	handleChange: (cond: boolean) => void;
}
