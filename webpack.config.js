const path = require("path");
const postcssPresetEnv = require("postcss-preset-env");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (config, options) => ({
  entry: {
    "web-app": path.resolve(__dirname, "src/first-project.js"),
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(path.resolve(__dirname), "dist"),
    chunkFilename: "first-project/[name].js",
    filename: "first-project.[name].js",
    libraryTarget: "system",
  },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
      "react-router-dom": "react-router-dom",
      "@platform/primary-table": "@platform/primary-table",
      "@platform/service-ui-libraries": "@platform/service-ui-libraries",
      "@platform/file-selection": "@platform/file-selection",
      "@platform/modals": "@platform/modals",
      "@platform/layout": "@platform/layout",
      "@platform/service-api-utilities": "@platform/service-api-utilities",
    },
  ],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/shared/Contexts"),
      "@api": path.resolve(__dirname, "src/api/api"),
      "@helpers": path.resolve(__dirname, "src/helpers/helpers"),
      "@metadata": path.resolve(__dirname, "src/helpers/table-metadata.js"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv(), require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv(), require("autoprefixer")],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "javascript/auto",
        use: {
          loader: "url-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: "datalake-module/assets",
            esModule: false,
            limit: 5000,
          },
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new Dotenv({
      path: options.mode === "production" ? "./.env" : "./.env.dev",
    }),
    new SystemJSPublicPathWebpackPlugin({
      rootDirectoryLevel: 1,
      systemjsModuleName: "@platform/deltalake-mf",
    }),
  ],
  optimization: {
    minimize: options.mode === "production",
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
});
