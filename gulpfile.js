var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

gulp.task('default',['js', 'sass', 'copy', 'watch']);

gulp.task('js', function() {
    return browserify({
        entries: ['./src/js/media-player.js']
    })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      includePaths: ['./node_modules/bootstrap/scss', './node_modules'],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
    return gulp.src('./src/html/index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/html/**/*.html', ['copy']);
});