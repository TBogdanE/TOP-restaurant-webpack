const path = require("path");

module.exports = {
  mode: "development", // or 'production'
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '',
  },
  /*devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Specify the directory to serve content from
    },
    open: true, // Open the browser when the server starts
    liveReload: true, 
    hot: true,  
  },*/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
