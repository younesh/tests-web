var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./static/src/scss/main.scss') /* adapte your path .. */
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./static/dist/css/'));
});

gulp.task('vendor', function() {
    return gulp.src(['./static/src/js/lib/**/*.js',
            './static/src/js/plugins/**/*.js']) /* adapte your path .. */
        //.pipe(js().on('error', sass.logError))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./static/dist/js/'));
});

gulp.task('app', function() {
    return gulp.src('./static/src/js/app/**/*.js') /* adapte your path .. */
        //.pipe(js().on('error', sass.logError))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./static/dist/js/'));
});

gulp.task('default', ['vendor', 'app', 'sass']);