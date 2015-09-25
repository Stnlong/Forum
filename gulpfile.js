var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

var nodemon = require('gulp-nodemon');

gulp.task('sass', function() {
	return gulp.src('client/assets/scss/**/*.scss')
		.pipe(sass()) // Using gulp-sass
		.pipe(gulp.dest('client/assets/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('client/assets/scss/**/*.scss', ['sass']);
	//Reloads the browser whenever HTML or JS files change
	gulp.watch('client/*.html', browserSync.reload);
	gulp.watch('client/app/**/*.js', browserSync.reload);
	gulp.watch('client/assets/js/**/*.js', browserSync.reload);
	gulp.watch('client/views/**/*.html', browserSync.reload);
})


gulp.task('browserSync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:8000",
        files: ["forum/**/*.*"],
        browser: "google chrome",
        port: 8000,
	});
});

gulp.task('nodemon', function(cb) {
	var started = false;
	return nodemon({
		script: 'server.js'
	}).on('start', function() {
		// to avoind nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	})
	.on('error', function(err) {
	     // Make sure failure causes gulp to exit
	     throw err;
	 });
});