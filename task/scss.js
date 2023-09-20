const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const path = require("../config/path.js");
const app = require("../config/app.js");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");

const scss = () => {
  return src(path.scss.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "main.min.css" }))
    .pipe(dest(path.scss.dest, { sourcemaps: true }));
};

module.exports = scss;
