/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
        minifierConfig: {
            mangle: {
                keep_fnames: true,
            },
        },
    },
    resolver: {
        sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "mjs", "wasm"], //add here
    },
};
