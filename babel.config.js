module.exports = {
    plugins: ['babel-plugin-react-compiler'],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'defaults',
            },
        ],

        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                development: false,
            },
        ],
    ],
};
