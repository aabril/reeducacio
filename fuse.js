const fsbx = require("fuse-box");

const panelSrcPath = "./panel/";
const panelBundleFile = "./public/panel/bundle.min.js";

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: panelSrcPath,
    outFile: panelBundleFile,
    cache: false,
    plugins: [

        // fsbx.CSSPlugin({ write: true }),
        fsbx.SVGPlugin(),
        // fsbx.UglifyJSPlugin(),
        [fsbx.LESSPlugin(), fsbx.CSSPlugin()],
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["latest"],
                plugins: [
                    ["transform-react-jsx", "transform-less"]
                ]
            }
        })
    ]
});

fuseBox.bundle(">index.js");