// https://github.com/jenstornell/gulpfile-style-script/blob/master/gulpfile.js 
let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let concat = require("gulp-concat");
let uglify = require('gulp-uglify-es').default;
let csso = require('gulp-csso');
let rename = require('gulp-rename');

var css = {
    src: 'static/src/scss/**/*.scss',
    dest: '_public/css/', //  /dossier
    filename: 'style.scss'
};

var js = {
    src: '_static/src/js/**/*.js',
    dest: '_public/js/',
    filename: 'scripts.js'
};

function style() {
    console.log("styles generation .... !! ! ");
    return (
        gulp
            .src(css.src)
            .pipe(concat(css.filename))
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(autoprefixer())
            .pipe(gulp.dest(css.dest))
            .pipe(csso())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest(css.dest))
    );
}

function script() {
    console.log("WOW app script generation ....  0000 !! ! ");
    return (
        gulp
            .src(js.src)
            .pipe(concat(js.filename))
            .pipe(gulp.dest(js.dest))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(js.dest))
    );
}

function watch() {
    gulp.watch(css.src, style);
    gulp.watch(js.src, script);
}

exports.css = style;
exports.js = script;
exports.default = watch;
