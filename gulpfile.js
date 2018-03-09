'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

var scssFiles = 'scss/**/*.scss';
var cssFiles = 'css/**/*.css';

var cssPath = 'css';
var destPath = 'dist';

gulp.task('build', function() {
    gulp.src(scssFiles)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(cssPath));
});

gulp.task('minify', function() {
    gulp.src(cssFiles) 
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(minifyCSS({ keepSpecialComments: 0 }))
        .pipe(rename('GovJE.min.css'))
        .pipe(gulp.dest(destPath));
});

gulp.task('default', function() {
    gulp.watch(scssFiles, ['build', 'minify']);
    gulp.start(['build', 'minify']);
});