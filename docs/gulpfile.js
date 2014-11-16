var path = require('canonical-path');
var Dgeni = require('dgeni');
var gulp = require('gulp');

gulp.task('docs', function () {
  var dgeni = new Dgeni([require('./config')]);
  return dgeni.generate();
});
