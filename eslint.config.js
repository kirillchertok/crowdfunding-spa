const js = require('@eslint/js');
const globals = require('globals');

const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

module.exports = [
    {
        ignores: ['dist/**', 'node_modules/**'],
    },

    js.configs.recommended,

    {
        files: ['src/**/*.{js,jsx}'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',

            globals: {
                ...globals.browser,
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,

            'react/prop-types': 'off',

            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },

    {
        files: ['*.config.js', 'webpack.config.js', 'babel.config.js'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',

            globals: {
                ...globals.node,
            },
        },
    },
];

