const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const clear = require("./task/clear.js");
const pug = require("./task/pug.js");
const css = require("./task/css.js");
const path = require("./config/path.js");
const { root } = require("./config/path.js");

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
};

exports.pug = pug;
exports.css = css;
exports.dev = series(clear, parallel(pug, css), parallel(watcher, server));
