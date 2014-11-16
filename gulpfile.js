var path = require('path');
var gulp = require('gulp');
var connect = require('gulp-connect');

var paths = {
  src: 'src',
  dist: 'dist',
  demo: 'demo',
  test: 'test',
};

var files = {
  scripts: path.join(paths.src, '**', '*.js'),
  demo: path.join(paths.demo, '**', '*'),
};

gulp.task('watch:demo', function () {
  gulp.watch(files.demo, function () {
    gulp.src(files.demo).pipe(connect.reload());
  });
});

gulp.task('serve', ['watch:demo'], function () {
  connect.server({ livereload: true });
});
