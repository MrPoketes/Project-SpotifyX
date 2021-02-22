import React from 'react';
import Carousel from 'nuka-carousel';
import { LeftIcon, RightIcon } from '../Icons/Icons';

interface ItemCarouselInterface {
	noToShow: number;
	noToScrool: number;
}

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
			<button onClick={previousSlide} className="focus:outline-none">
				<LeftIcon />
			</button>
		)}
		renderCenterRightControls={({ nextSlide }) => (
			<button onClick={nextSlide} className="focus:outline-none">
				<RightIcon />
			</button>
		)}
	>
		{children}
	</Carousel>
);
