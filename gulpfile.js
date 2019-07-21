'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify'); /* este es para los js */
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(autoprefixer({
            "overrideBrowserslist": [
                "defaults"
            ],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css')); //css final
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
});