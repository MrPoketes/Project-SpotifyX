import { useRouter } from 'next/dist/client/router';
import React, { BaseSyntheticEvent, useState } from 'react';

export const SearchBar: React.FC = () => {
	const [search, setSearch] = useState('');

	const router = useRouter();

	return (
		<div className="text-black ml-5 mt-2">
			<input
				onInput={(event: BaseSyntheticEvent) => {
					setSearch(event.target.value);
				}}
				onKeyDown={event => {
					if (event.key === 'Enter') {
						router.push(`/search/${search}`);
					}
				}}
				className="pl-2 rounded-full py-1 focus:outline-none focus:ring-4 transition ease-in-out"
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
