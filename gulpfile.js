'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['compile-sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("./src/scss/*.scss", ['compile-sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('compile-sass', function() {
    return gulp.src(["!./src/scss/variables.scss", "./src/scss/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});

gulp.task('prod', ['serve']);