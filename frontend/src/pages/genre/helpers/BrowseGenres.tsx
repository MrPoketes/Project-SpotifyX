import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_CATEGORIES } from '../../../queries/browseQuery';
import { Card } from '../../../components/Card/Card';
import { BrowseGenresInterface } from './BrowseInterfaces';
import Link from 'next/link';

export const BrowseGenres: React.FC<BrowseGenresInterface> = props => {
	const { data } = useQuery(GET_ALL_CATEGORIES, {
		variables: { country: props.country }
	});

	return (
		<div>
			{data && (
				<div className="grid grid-cols-6">
					{data.getAllCategories.map((category, i) => (
						<Link
							key={i}
							href={{
								pathname: '/genre/[genre]',
								query: {
									name: category.name,
									country: props.country
								}
							}}
							as={`/genre/${category.id}`}
						>
							<div className="mb-5">
								<Card
									showControls={false}
									image={
										category.icons.length > 0
											? category.icons[0].url
											: ''
									}
									header={category.name}
								/>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};
