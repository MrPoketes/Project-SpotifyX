import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_CATEGORIES } from '../../../queries/browseQuery';
import { Card } from '../../../components/Card/Card';
import { BrowseGenresInterface } from './BrowseInterfaces';

export const BrowseGenres: React.FC<BrowseGenresInterface> = props => {
	const { data } = useQuery(GET_ALL_CATEGORIES, {
		variables: { country: props.country }
	});

	return (
		<div>
			{data && (
				<div className="grid grid-cols-6">
					{data.getAllCategories.map((category, i) => (
						<div key={i} className="mb-5">
							<Card
								showControls={false}
								href="/genre/[genre]"
								asHref={`/genre/${category.id}?name=${category.name}&country=${props.country}`}
								image={category.icons[0].url}
								header={category.name}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
