const { fuchsia } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.tsx', './src/**/*.ts'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			coolGray: colors.coolGray,
			blueGray: colors.blueGray
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
