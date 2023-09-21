import gulp from "gulp";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

import path from "../config/path.js";
import app from "../config/app.js";
import webpHtml from "gulp-webp-html";

const html = () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(
      size({
        title: "Before sizing",
      })
    )
    .pipe(htmlmin(app.htmlmin))
    .pipe(
      size({
        title: "After sizing",
      })
    )
    .pipe(gulp.dest(path.html.dest));
};

export default html;
