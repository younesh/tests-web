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

var jsApp = {
    src: '_static/src/js/app/**/*.js',
    dest: '_public/js/',
    filename: 'scripts.js'
};

var jsVendor = {
    src: '_static/src/js/lib/**/*.js',
    dest: '_public/js/',
    filename: 'vendor.js'
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

function scriptApp() {
    console.log("WOW app script generation .... !! ! ");

    return (
        gulp
            .src(jsApp.src)
            .pipe(concat(jsApp.filename))
            .pipe(gulp.dest(jsApp.dest))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(jsApps.dest))
    );
}

function scriptVendor () {
    console.log("MMMM vendor script generation .... !! ! ");
    return (
        gulp
            .src(jsVendor.src)
            .pipe(concat(jsVendor.filename))
            .pipe(gulp.dest(jsVendor.dest))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(jsVendor.dest))
    );
}

function watch() {
    gulp.watch(css.src, style);
    gulp.watch(jsApp.src, scriptApp);
   //  gulp.watch(jsVendor.src, scriptVendor);
}


/*

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
const watch = gulp.parallel(watchFiles, browserSync);
*/

exports.style = style;
exports.script = scriptApp;
//exports.scriptVendor = scriptVendor;
exports.default = watch;