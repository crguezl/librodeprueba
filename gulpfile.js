var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
 
gulp.task('build', shell.task( 'gitbook build'));

gulp.task('deploy', [ 'build'], function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});
