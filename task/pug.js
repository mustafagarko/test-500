const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");

const path = require("../config/path.js");
const app = require("../config/app.js");

const pug = () => {
  return src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Pug",
          message: error.message,
        })),
      })
    )
    .pipe(pugs(app.pug))
    .pipe(dest(path.pug.dest));
};

module.exports = pug;
