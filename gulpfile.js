const gulp = require('gulp'),
      gp   = require('gulp-load-plugins')();
var   browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: "",
        startPath: "views/index.html",
        directory: true
    });
    browserSync.watch(['assets/css/', 'views/'],  browserSync.reload);
});

gulp.task('scss', function() {
    return gulp.src('assets/scss/style.scss')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass())
        .pipe(gp.csso())
        .on("error", gp.notify.onError({
            title: 'style'
        }))
        .pipe(gp.rename({suffix:'.min'}))
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts:libs', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'])
        .pipe(gp.concat('libs.min.js'))
        .pipe(gulp.dest('assets/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function() {
    return gulp.src(['assets/js/main.js'])
        .pipe(gp.concat('main.min.js'))
        .pipe(gulp.dest('assets/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('assets/js/main.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series(
    gulp.parallel('scss', 'scripts:libs', 'scripts'),
    // 'watch'
    gulp.parallel('watch', 'serve')
));









