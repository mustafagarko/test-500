import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

import path from "../config/path.js";
import app from "../config/app.js";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);
const scss = () => {
  return gulp
    .src(path.scss.src, { sourcemaps: app.isDev })
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
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "main.min.css" }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }));
};

export default scss;
