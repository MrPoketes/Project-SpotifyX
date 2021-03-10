import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BurgerIcon, LeftIcon, RightIcon } from '../../Icons/Icons';

interface RouterButtonsInterface {
	handleBurgerClick: () => void;
}
export const RouterButtons: React.FC<RouterButtonsInterface> = props => {
	const router = useRouter();
	return (
		<>
			<button
				className="p-2 focus:ring-4 rounded-full transition ease-in-out"
				onClick={() => {
					props.handleBurgerClick();
				}}
			>
				<BurgerIcon className="w-8 h-8" />
			</button>
			<button
				className="p-2 focus:ring-4 rounded-full transition ease-in-out"
				onClick={() => router.back()}
			>
				<LeftIcon />
			</button>
			<button className="focus:ring-4 p-2 rounded-full transition ease-in-out">
				<RightIcon />
			</button>
		</>
	);
};
