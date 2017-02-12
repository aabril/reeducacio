const fsbx = require("fuse-box");


// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "panel/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    outFile: "./public/panel/bundle.js",
    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["latest"],
                plugins: [
                    ["transform-react-jsx"]
                ]
            }
        })
    ]
});

fuseBox.bundle(">bundle.js");