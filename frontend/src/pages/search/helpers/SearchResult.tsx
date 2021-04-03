import Link from 'next/link';
import React from 'react';

interface SearchResultInterface {
	id: string;
	uri: string;
	image: string;
	title: string;
	text: string;
	type: string;
}

export const SearchResult: React.FC<SearchResultInterface> = props => {
	const type = props.type === 'track' ? 'album' : props.type;
	return (
		<Link href={`/${type}/[${type}]`} as={`/${type}/${props.id}`}>
			<div className="flex m-2 p-1 hover:bg-gray-700">
				<img className="w-16 h-16" src={props.image} />
				<div className="ml-5 mt-2">
					<h1>
						{props.title.length > 25
							? props.title.substring(0, 25) + '...'
							: props.title}
					</h1>
					<h1 className="text-sm text-gray-400">
						{props.text.length > 25
							? props.text.substring(0.25) + '...'
							: props.text}
					</h1>
				</div>
			</div>
		</Link>
	);
};
