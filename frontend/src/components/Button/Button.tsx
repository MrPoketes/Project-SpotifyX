import React from 'react';
import { ButtonInterface } from './ButtonInterfaces';

export const Button: React.FC<ButtonInterface> = props => {
	const padding = props.circle ? 'p-3 pt-1' : 'py-2 px-10';
	const disabled = props.disabled
		? 'opacity-50 cursor-not-allowed'
		: 'transform hover:scale-110';
	return (
		<button
			disabled={props.disabled}
			className={`block rounded-full ${padding} font-medium tracking-wide uppercase text-sm text-white transition ease-in-out ${props.className}  focus:ring-4 ${disabled}`}
		>
			<div className="flex">{props.children}</div>
		</button>
	);
};
