/**
 * Created by Tobi on 08/12/2016.
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Lint JavaScript
gulp.task('lint', [], function() {
  return gulp.src([
    '*.js',
    '*.html'
  ])
    .pipe($.if('*.html', $.htmlExtract({strip: true})))
    .pipe($.jshint())
    .pipe($.jscs())
    .pipe($.jscsStylish.combineWithHintResults())
    .pipe($.jshint.reporter('jshint-stylish'))
});
