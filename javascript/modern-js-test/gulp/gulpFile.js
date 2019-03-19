var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    console.log("hhhhhhhhhhhhhhhhh 2019");
    gulp.src("js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
         .pipe(gulp.dest("dist/js"))
})