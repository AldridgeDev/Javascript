var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// sass example
// gulp.task('styles',function() {
//   return gulp.src('src/sass/**/*.scss') // will find in all sass folders and files
//   .pipe(sourcemaps.init()) // init must come before the write
//   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions']
//   }))
//   .pipe(sourcemaps.write('./maps'))
//   .pipe(gulp.dest('dist/css'))
// });

gulp.task('styles', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles']);
});
