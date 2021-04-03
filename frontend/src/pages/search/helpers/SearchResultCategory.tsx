import React from 'react';
import { formatArtistNames } from '../../../utilities/formatArtistNames';
import { SearchResult } from './SearchResult';

interface SearchResulCategoryInterface {
	title: string;
	category: [
		{
			id: string;
			uri: string;
			artists?: [
				{
					name: string;
				}
			];
			album?: {
				id: string;
				images: [ImagesInterface];
			};
			images: [ImagesInterface];
			name: string;
		}
	];
}

interface ImagesInterface {
	url: string;
}

export const SearchResultCategory: React.FC<SearchResulCategoryInterface> = props => {
	return (
		<div className="mr-5">
			<div className="ml-4  flex justify-between my-3 ">
				<h1 className="font-semibold text-xl">{props.title}</h1>
				<h1 className="font-semibold text-xl hover:underline">See all</h1>
			</div>
			<hr className="border-gray-500" />
			<div className="grid grid-cols-2">
				{props.category.map((item, i) => {
					if (i <= 3) {
						const text =
							'artists' in item
								? formatArtistNames(item.artists, item.artists.length)
								: '';
						const images =
							'album' in item ? item.album.images : item.images;
						const id = 'album' in item ? item.album.id : item.id;
						return (
							<SearchResult
								type={props.title
									.toLowerCase()
									.substring(0, props.title.length - 1)}
								key={i}
								id={id}
								uri={item.uri}
								image={images.length > 0 ? images[0].url : ''}
								title={item.name}
								text={text}
							/>
						);
					}
					return;
				})}
			</div>
		</div>
	);
};
