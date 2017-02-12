const fsbx = require("fuse-box");

const panelSrcPath = "./panel/";
const panelBundleFile = "./public/panel/bundle.min.js";

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: panelSrcPath,
    outFile: panelBundleFile,
    cache: false,
    plugins: [
        fsbx.SassPlugin({ 
            // outputStyle: 'compressed' 
        }),
        fsbx.CSSPlugin({ write: true }),
        fsbx.SVGPlugin(),
        // fsbx.UglifyJSPlugin(),
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

fuseBox.bundle(">index.js");