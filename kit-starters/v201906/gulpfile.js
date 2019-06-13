// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()

//@@STEP--00 : import/declare dependance in const
const { src, dest, watch, series, parallel } = require("gulp");
// Importing all the Gulp-related packages we want to
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
const twig = require("gulp-twig");
const server = require("browser-sync").create();

var replace = require("gulp-replace");

//@@STEP--01 : source/dist const path define
// source File paths
const source = {
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
  imgPath: "app/img/**/*.*",
  fontPath: "app/fonts/**/*.*",
  tplPath: "app/twig/**/*.*"
};

// distination File paths
const dist = {
  scssPath: "dist",
  jsPath: "dist",
  imgPath: "dist/img",
  fontPath: "dist/fonts",
  tplPath: "dist",
  ServerEnterLoad: "dist" // entry point for loading/reloading browser
};

// local Server and reload after updating
function reload(done) {
  server.reload();
  done();
}
function serve(done) {
  server.init({
    server: {
      baseDir: dist.ServerEnterLoad
    }
  });
  done();
}

//@@STEP--02 : function task define

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(source.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(dest(dist.scssPath)); // put final CSS in dist folder
}

// images task : compile img task
function imgTask() {
  return src(source.imgPath)
    .pipe(imagemin({ verbose: true })) // verbose: true > display in console image mimification journal
    .pipe(dest(dist.imgPath));
}

// fonts task : compile fonts task
function fontTask() {
  return src(source.fontPath).pipe(dest(dist.fontPath));
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src([
    source.jsPath
    //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest(dist.jsPath));
}

// Templating task: TWIG
function tplTask() {
  console.log("tplTask : OK !!");
  return src([source.tplPath])
    .pipe(
      twig({
        data: {
          //title: "Gulp and Twig",
        }
      })
    )
    .pipe(dest(dist.tplPath));
}

// Cachebust : permet de changer la valeur des parametre des applle des fichier pour enlever la persistance du cache nav
var cbString = new Date().getTime();
function cacheBustTask() {
  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("."));
}

//@@STEP--03 : watch path/task implement > watch([PATH1, PAHT2,...], parallel(TASK1,TASK2,...));

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  // livereload.listen();
  watch(
    [
      source.scssPath,
      source.jsPath,
      source.imgPath,
      source.fontPath,
      source.tplPath
    ],
    parallel(scssTask, jsTask, imgTask, fontTask, tplTask, reload)
  );
}

//@@STEP--04 : default gulb launch serices > implementing tasks
// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  parallel(scssTask, jsTask, imgTask, fontTask, tplTask, serve),
  cacheBustTask,
  watchTask
);
