var gulp = require('gulp')
  , mocha = require('gulp-mocha')

gulp.task('test', function () {
  gulp.src('./test/*.spec.js')
    .pipe(mocha({
      ui: 'bdd',
      reporter: 'spec'
    }))
})

gulp.task('default', ['test'], function() {});
