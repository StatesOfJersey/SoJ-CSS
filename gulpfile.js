var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('./css/'));

});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
