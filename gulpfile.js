let gulp = require('gulp');
let sass = require('gulp-ruby-sass');
let sourcemaps = require('gulp-sourcemaps');

let livereload = require('livereload');
let server = livereload.createServer();

server.watch(__dirname);
server.watch(__dirname + "/css");

gulp.task('sass', function () {
	return sass(['css/main.scss'], { sourcemap: true })
	.pipe(sourcemaps.write('maps', {
		includeContent: false,
		sourceRoot: 'css'
	}))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
