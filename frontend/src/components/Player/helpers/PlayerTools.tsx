import React from 'react';
import {
	LeftIcon,
	PlayIcon,
	RightIcon,
	RepeatIcon,
	ShuffleIcon
} from '../../Icons/Icons';
import { InputRange } from '../../InputRange/InputRange';

export const PlayerTools: React.FC<any> = props => {
	return (
		<div className="w-full mt-5">
			<div className="flex justify-center mb-3">
				<button className="mr-3 text-gray-500">
					<ShuffleIcon />
				</button>
				<button>
					<LeftIcon className="w-10 h-10" />
				</button>
				<button>
					<PlayIcon className="w-12 h-12" />
				</button>
				<button>
					<RightIcon className="w-10 h-10" />
				</button>
				<button className="ml-3 text-gray-500">
					<RepeatIcon className="w-6 h-6" />
				</button>
			</div>
			<InputRange className="w-full" />
		</div>
	);
};
