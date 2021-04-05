import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Header } from '../../../components/Header/Header';

interface PlaylistHeaderInterface {
	title: string;
	image: string;
	name: string;
	description: string;
	owner: string;
	disabled: boolean;
}

export const PlaylistHeader: React.FC<PlaylistHeaderInterface> = props => {
	return (
		<Header image={props.image} name={props.name} title={props.title}>
			<h1 className="text-gray-200 font-normal mt-3">{props.description}</h1>
			<h1 className="text-gray-200 font-normal my-1 mb-3">
				Created by {props.owner}
			</h1>
			<div className="text-black flex">
				<Button className="bg-green-500 mr-2" disabled={props.disabled}>
					Play
				</Button>
				<Button circle className="bg-gray-700 border border-white">
					...
				</Button>
			</div>
		</Header>
	);
};
