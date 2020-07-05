const path = require("path");
const webpack = require("webpack");
const contentBase = path.join(__dirname, "src", "assets");
const scssDir = path.join(__dirname, "src/assets/scss");
// const envStyle = process.env.VUE_APP_STYLE;
// console.log(envStyle);

module.exports = {
  devServer: { contentBase },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_variables.scss";`,
        sassOptions: {
          includePaths: [scssDir]
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // $: "jquery",
        // jquery: "jquery",
        // "window.jQuery": "jquery",
        // jQuery: "jquery"
      })
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
};
