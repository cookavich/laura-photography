/**
 * Created by paulcook on 4/9/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("sass", function()
{
    return gulp.src('css/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task("watch", function()
{
    gulp.watch('_sass/**/*.scss', ['sass']);
});
