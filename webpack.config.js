var path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }]
    }
};
