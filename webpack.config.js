// webpack.config.js

module.exports = {
    // ... other webpack configuration ...

    module: {
        rules: [
            // ... other rules ...

            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'videos/[name].[ext]',
                    },
                },
            },
        ],
    },
};