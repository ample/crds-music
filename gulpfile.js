const { src, dest, watch } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

function compileSass(callback) {
  return src('_assets/stylesheets/main.scss')
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .pipe(dest('www'));
}

function defaultTask(callback) {
  watch(['_assets/**/*.scss'], compileSass);
}

exports.default = defaultTask;
