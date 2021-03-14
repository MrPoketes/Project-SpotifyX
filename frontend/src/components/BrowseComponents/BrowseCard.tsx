import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BrowseCardInterface } from './BrowseInterfaces';

export const BrowseCard: React.FC<BrowseCardInterface> = props => {
	const router = useRouter();
	return (
		<div
			className="mr-5"
			onClick={() =>
				router.push(
					`/genre/${props.id}?name=${props.name}&country=${props.country}`
				)
			}
		>
			<div className="flex cursor-pointer">
				<img src={props.image} className="w-80 h-80" />
			</div>
			<div className="mt-2 text-center">
				<button className="font-bold">
					<h1 className="cursor-pointer">{props.name}</h1>
				</button>
			</div>
		</div>
	);
};
