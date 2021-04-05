import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Header } from '../../../components/Header/Header';

interface PodcastHeaderInterface {
	name: string;
	image: string;
	publisher: string;
}
export const PodcastHeader: React.FC<PodcastHeaderInterface> = props => {
	return (
		<Header image={props.image} name={props.name} title="Podcast">
			<h1 className="mt-5 text-gray-300 text-bg font-medium">
				By {props.publisher}
			</h1>
			<div className="text-black flex mt-5">
				<Button className="bg-green-500 mr-2">Play</Button>
				<Button className="bg-gray-700 border border-white mr-2">Follow</Button>
				<Button circle className="bg-gray-700 border border-white">
					...
				</Button>
			</div>
		</Header>
	);
};
