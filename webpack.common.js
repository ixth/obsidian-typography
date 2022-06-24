const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'node',
    output: {
        clean: true,
        chunkFormat: 'commonjs',
        library: {
            type: 'commonjs2',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    externals: {
        obsidian: 'commonjs obsidian',
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ context: 'src', from: '*.json' }],
        }),
    ],
};
