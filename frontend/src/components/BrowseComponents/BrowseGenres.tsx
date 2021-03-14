import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_CATEGORIES } from '../../queries/browseQuery';
import { BrowseCard } from './BrowseCard';
import { BrowseGenresInterface } from './BrowseInterfaces';

export const BrowseGenres: React.FC<BrowseGenresInterface> = props => {
	const { loading, error, data } = useQuery(GET_ALL_CATEGORIES, {
		variables: { country: props.country }
	});

	return (
		<div>
			{data && (
				<div className="grid grid-cols-6">
					{data.getAllCategories.map((category, i) => (
						<div key={i} className="mb-5">
							<BrowseCard
								country={props.country}
								id={category.id}
								image={category.icons[0].url}
								name={category.name}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
