'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var scssFiles = 'scss/**/*.scss';
var cssFiles = 'css/**/*.css';

var cssPath = './css';
var destPath = './dist';

gulp.task('build', function() {
   return gulp.src(scssFiles)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(cssPath));
});

gulp.task('minify', function() {
    return gulp.src(cssFiles) 
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('GovJE.min.css'))
        .pipe(gulp.dest(destPath));
});

gulp.task('default', function() {
    gulp.watch(scssFiles,gulp.series('build'));
    gulp.watch(cssFiles,gulp.series('minify'));
});