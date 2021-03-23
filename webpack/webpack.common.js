const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

const fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

module.exports = {
    entry: {
        popup: path.join(srcDir, "popup.ts"),
        options: path.join(srcDir, "options.ts"),
        "../background": path.join(srcDir, "background.ts"),
        "../contentScript": path.join(srcDir, "contentScript.ts"),
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: new RegExp(".(" + fileExtensions.join("|") + ")$"),
                loader: "file-loader",
                options: {
                    name: "../assets/[contenthash].[ext]",
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")],
        extensions: [".ts", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
};
