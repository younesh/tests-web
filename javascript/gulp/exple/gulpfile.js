/*
 * gulpfile.js -- Builds the assets for the style guide.
 */

'use strict';

/*
|--------------------------------------------------------------------------
| DEPENDENCIES
|--------------------------------------------------------------------------
*/
var gulp = require('gulp');

// Twig
var twig = require('gulp-twig');

// Style
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// Script
var uglify = require('gulp-uglify');
var resolveDependencies = require('gulp-resolve-dependencies');
var concat = require('gulp-concat');

// Images
//var imagemin = require('gulp-imagemin');

// Snif erreur
var plumber = require('gulp-plumber');

// Merge : Permet de faire plusieurs src en une task
var merge = require('merge-stream');

//var livereload = require('gulp-livereload');

/*
|----------------------------------------livereload----------------------------------
| CONFIGURATION
|--------------------------------------------------------------------------
*/
var ROOT = './';
var target = {
    dev: '../web/themes/custom/cpf/',
    build: '__public/'
}

/*
|--------------------------------------------------------------------------
| TASK GROUPS
|--------------------------------------------------------------------------
*/
gulp.task('default', ['dev']);

gulp.task('dev', ['build', 'watch']);
gulp.task('build', ['twig', 'style', 'script-app-jquery', 'script-app-vanilla', 'script-plugin', 'script-plugin-bootstrap', 'asset', 'print']);

//gulp.task('build', ['twig', 'style', 'ckeditor', 'script-app-jquery', 'script-app-vanilla', 'script-plugin', 'script-plugin-bootstrap', 'asset', 'print']);
gulp.task('watch', ['build']);

/*
|--------------------------------------------------------------------------
| TWIG - Template
| IMPORTANT : Le twig doit être appelé en 1er
| IMPORTANT : Le *.html sert à prendre que les .html à la racine
|--------------------------------------------------------------------------
*/
gulp.task('twig', function () {
    return gulp.src([ROOT + 'twig/*.html', ROOT + 'twig/*.twig'])
        .pipe(twig())
        .pipe(gulp.dest(target.build));
});

/*
|--------------------------------------------------------------------------
| STYLEHEET GENERATION AND OPTIMIZATION
|--------------------------------------------------------------------------
*/
gulp.task('style', function () {
    // Dossier(s)/fichier(s) d'entrée
    return gulp.src(ROOT + 'style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(cleanCSS({ debug: true }, function(details) {
          console.log(details.name + ' (before) >>> ' + details.stats.originalSize);
          console.log(details.name + ' (after)  >>> ' + details.stats.minifiedSize);
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(target.dev + 'css'))
        .pipe(gulp.dest(target.build + 'css'))
});

gulp.task('ckeditor', function () {
    // Dossier(s)/fichier(s) d'entrée
    return gulp.src(ROOT + 'style/cpf.ckeditor.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('cpf.ckeditor.css'))
        // .pipe(cleanCSS({ debug: true }, function(details) {
        //   console.log(details.name + ' (before) >>> ' + details.stats.originalSize);
        //   console.log(details.name + ' (after)  >>> ' + details.stats.minifiedSize);
        // }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(target.dev + 'style'))
        .pipe(gulp.dest(target.build + 'style'))
});

//
// * jquery-open + jquery-close : Fix le bug jQuery dans Drupal
// * jquery-open.js ouvre jQuery
// * jquery-close.js ouvre jQuery
//
// * Le fichier app.js init le fichier généré core.js
//
gulp.task('script-app-jquery', function () {
    return gulp.src([
        //
        // OPEN
        ROOT + 'script/app/jquery/jquery-open.js',
        //
        // Appeler tous les autres scripts ici
        ROOT + 'script/app/jquery/a11y-fix.js',
        ROOT + 'script/app/jquery/header-sticky.js',
        ROOT + 'script/app/jquery/megamenu.js',
        ROOT + 'script/app/jquery/aside.js',
        ROOT + 'script/app/jquery/aside-fixed.js',
        ROOT + 'script/app/jquery/overflow.js',
        ROOT + 'script/app/jquery/owl-carousel.js',
        ROOT + 'script/app/jquery/dashboard.js',
        ROOT + 'script/app/jquery/float-label.js',
        ROOT + 'script/app/jquery/prehome.js',
        ROOT + 'script/app/jquery/print.js',
        ROOT + 'script/app/jquery/search-sort.js',
        //
        // init des scripts du dessus
        ROOT + 'script/app/app-jquery.js',
        //
        // Close
        ROOT + 'script/app/jquery/jquery-close.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(resolveDependencies({
        pattern: /\* @requires [\s-]*(.*?\.js)/g
    }))
    .pipe(concat('app-jquery.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(target.dev + 'script'))
    .pipe(gulp.dest(target.build + 'script'));
});

//
// SCRIPT APP JS VANILLA
//
gulp.task('script-app-vanilla', function () {
    return gulp.src([
        // no jquery for level 1
        // vanilla is just some plain js
        ROOT + 'script/app/vanilla/library.js',
        ROOT + 'script/app/vanilla/calls.js'
    ])
    .pipe(sourcemaps.init())
    // .pipe(resolveDependencies({
    //     pattern: /\* @requires [\s-]*(.*?\.js)/g
    // }))
    .pipe(concat('app-vanilla.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(target.dev + 'script'))
    .pipe(gulp.dest(target.build + 'script'));
});

//
// On build les JS qui sont dans plugin dans un fichier vendor.js
//
gulp.task('script-plugin', function () {
    return gulp.src([
        //
        // OPEN
        ROOT + 'script/app/jquery/jquery-open.js',
        //
        // Appeler tous les autres scripts ici
        ROOT + 'script/plugin/harvey/harvey.js',
        ROOT + 'script/plugin/owl-carousel/owl-carousel.js',
        ROOT + 'script/plugin/jquery-ui/datepicker.js',
        //
        // accessibility
        ROOT + 'script/plugin/a11y/modal.js',
        ROOT + 'script/plugin/a11y/datepicker.js',
        //
        // CLOSE
        ROOT + 'script/app/jquery/jquery-close.js',

        ROOT + 'script/plugin/MoveTo.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(resolveDependencies({
        pattern: /\* @requires [\s-]*(.*?\.js)/g
    }))
    .pipe(concat('vendor.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(target.dev + 'script'))
    .pipe(gulp.dest(target.build + 'script'));
});

//
// On build les JS de Bootstrap
//
gulp.task('script-plugin-bootstrap', function () {
    return gulp.src([
        ROOT + 'script/plugin/bootstrap/bootstrap.bundle.js'
        // ROOT + 'script/plugin/bootstrap/bootstrap.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(resolveDependencies({
        pattern: /\* @requires [\s-]*(.*?\.js)/g
    }))
    .pipe(concat('bootstrap-custom.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(target.dev + 'script'))
    .pipe(gulp.dest(target.build + 'script'));
});


/*
|--------------------------------------------------------------------------
| COPY AND PASTE ASSETS
|--------------------------------------------------------------------------
*/
gulp.task('asset', function () {
    var modernizr = gulp.src(ROOT + 'script/plugin/modernizr/modernizr.js')
        .pipe(gulp.dest(target.dev + 'script'))
        .pipe(gulp.dest(target.build + 'script'));

    var detectizr = gulp.src(ROOT + 'script/plugin/detectizr/detectizr.js')
        .pipe(gulp.dest(target.dev + 'script'))
        .pipe(gulp.dest(target.build + 'script'));

    var jquery = gulp.src(ROOT + 'script/plugin/jquery/jquery-3-3-1.js')
        .pipe(gulp.dest(target.dev + 'script'))
        .pipe(gulp.dest(target.build + 'script'));

    var modal_init = gulp.src(ROOT + 'script/app/drupal.js')
        .pipe(gulp.dest(target.dev + 'script'));

    var modal_init = gulp.src(ROOT + 'script/app/modal-init.js')
        //.pipe(gulp.dest(target.dev + 'script'))
        .pipe(gulp.dest(target.build + 'script'));

    var font = gulp.src(ROOT + 'font/**/*.*')
        .pipe(gulp.dest(target.dev + 'font'))
        .pipe(gulp.dest(target.build + 'font'));

    var img = gulp.src(ROOT + 'img/**/*')
        .pipe(gulp.dest(target.dev + 'img'))
        .pipe(gulp.dest(target.build + 'img'));

    var video = gulp.src(ROOT + 'video/**/*')
        .pipe(gulp.dest(target.dev + 'video'))
        .pipe(gulp.dest(target.build + 'video'));

    return merge(video, img, font, jquery, detectizr, modernizr, modal_init);
});

/*
|--------------------------------------------------------------------------
| WATCH TASKS
|--------------------------------------------------------------------------
*/
gulp.task('watch', function () {
    gulp.watch(ROOT + 'style/**/*.scss', ['style', 'ckeditor']);
    gulp.watch(ROOT + 'style/print.scss', ['print']);
    gulp.watch(ROOT + 'script/plugin/*.js', ['script-plugin', 'script-plugin-bootstrap']);
    gulp.watch(ROOT + 'script/app/**/*.js', ['script-app-jquery']);
    gulp.watch(ROOT + 'script/app/vanilla/*.js', ['script-app-vanilla']);
    gulp.watch(ROOT + 'twig/**/*.html', ['twig']);
});

/*
|--------------------------------------------------------------------------
| PRINT CSS
|--------------------------------------------------------------------------
*/
gulp.task('print', function () {
    return gulp.src(ROOT + 'style/print.scss')
        .pipe(sass())
        .pipe(concat('print.css'))
        .pipe(gulp.dest(target.dev + 'style'))
        .pipe(gulp.dest(target.build + 'style'));
});