const CopyWebpackPlugin = require('copy-webpack-plugin');
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.less$/,
            use: [
              // You don't need to add the matching ExtractText plugin
              // because gatsby already includes it and makes sure it's only
              // run at the appropriate stages, e.g. not in development
              loaders.miniCssExtract(),
              loaders.css({ importLoaders: 1 }),
              // the postcss loader comes with some nice defaults
              // including autoprefixer for our configured browsers
              loaders.postcss(),
              `less-loader`,
            ],
          },
        ],
      },
      plugins: [
        plugins.define({
          __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: 'node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs',
                to: 'pdf.worker.min.mjs'
              }
            ]
          })
      ],
    })
  }