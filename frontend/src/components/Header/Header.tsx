import { useQuery } from '@apollo/client';
import React from 'react';
import { CHECK_FOLLOWS_ARTIST } from '../../queries/artistQuery';
import { Button } from '../Button/Button';

interface HeaderInterface {
	type: string;
	name: string;
	followers: number;
	image: string;
	id: string;
}

export const Header: React.FC<HeaderInterface> = props => {
	const {
		loading: loading,
		error: error,
		data: checkFollows
	} = useQuery(CHECK_FOLLOWS_ARTIST, { variables: { id: props.id } });

	return (
		<div className="relative">
			<div className="absolute bottom-5 left-5">
				<div className="mb-5">
					<h1 className="text-3xl">{props.type}</h1>
					<h1 className="text-7xl font-bold">{props.name}</h1>
				</div>
				<div className="text-black flex">
					<Button className="bg-green-500 mr-2">Play</Button>
					<Button className="bg-gray-700 border border-white mr-2">
						{checkFollows ? (
							<>
								{checkFollows.checkIfUserFollows[0]
									? 'Following'
									: 'Follow'}
							</>
						) : (
							'Follow'
						)}
					</Button>
					<Button circle className="bg-gray-700 border border-white">
						...
					</Button>
					{/* <div>
						<h1>Followers</h1>
						<h1>{props.followers}</h1>
					</div> */}
				</div>
			</div>
			<div
				className="w-full h-96 bg-cover bg-center"
				style={{
					backgroundImage: `url(${props.image})`
				}}
			/>
		</div>
	);
};
