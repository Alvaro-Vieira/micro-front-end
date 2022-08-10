const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "production",
      template: "./src/index.html",
    }),
    // new ModuleFederationPlugin({
    //   name: "counter",
    //   filename: "remoteEntry.js",
    //   remotes: {},
    //   exposes: {
    //     "./Counter": "./src/counter/src/components/Counter",
    //   },
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       requiredVersion: deps.react,
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: deps["react-dom"],
    //     },
    //   },
    // }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
