const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/start.tsx"),
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
