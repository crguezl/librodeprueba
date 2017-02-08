var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
 

gulp.task('build', shell.task( 'gitbook build'));
gulp.task('deploygb', shell.task( 'git push gitbook master'));

gulp.task('deploygh', [ 'build'], function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});
