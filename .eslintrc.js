/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended'
		//'eslint:recommended'
	],

	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	globals: {
		MyGlobal: true,
		window: true,
		document: true
	},
	plugins: [ 'react', 'import', 'react-hooks' ],
	rules: {
		// 'import/named': 1,
		// 'import/namespace': 1,
		// 'import/default': 1,
		// 'import/export': 1,
		'react/react-in-jsx-scope': 'off',
		// 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 1
		// 'react-hooks/rules-of-hooks': 'error',
		// 'react-hooks/exhaustive-deps': 'warn',
		// 'import/prefer-default-export': 0,
		// 'import/no-extraneous-dependencies': 0,
	}
};
