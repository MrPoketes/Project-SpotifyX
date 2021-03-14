import React from 'react';
import Carousel from 'nuka-carousel';
import { LeftIcon, RightIcon } from '../Icons/Icons';
import { ItemCarouselInterface } from './ItemCarouselInterfaces';

export const ItemCarousel: React.FC<ItemCarouselInterface> = ({
	children,
	noToShow,
	noToScrool
}) => (
	<Carousel
		slidesToShow={noToShow}
		slidesToScroll={noToScrool}
		renderBottomCenterControls={() => {
			return null;
		}}
		renderCenterLeftControls={({ previousSlide }) => (
			<button onClick={previousSlide}>
				<LeftIcon className="w-10 h-10" />
			</button>
		)}
		renderCenterRightControls={({ nextSlide }) => (
			<button onClick={nextSlide} className="mr-5">
				<RightIcon className="w-10 h-10" />
			</button>
		)}
	>
		{children}
	</Carousel>
);
