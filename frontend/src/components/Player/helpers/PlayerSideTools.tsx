import React from 'react';
import { VolumeUpIcon } from '../../Icons/Icons';
import { InputRange } from '../../InputRange/InputRange';

export const PlayerSideTools: React.FC<any> = props => {
	return (
		<div className="w-full flex justify-end">
			<div className="mr-5 mt-10">
				<button className="mr-3">
					<VolumeUpIcon />
				</button>
				<InputRange />
			</div>
		</div>
	);
};
