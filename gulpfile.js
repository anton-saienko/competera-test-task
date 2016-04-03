var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var babel = require('gulp-babel');
var concat = require('gulp-concat');

//основная цепочка слежения за стилизацией элементов
gulp.task('scss', function(){
	gulp.src('app/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifycss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

//bower + wiredep, который добавляет нужные скрипты и стили из папки bower в указанное место в <head> index.html
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

//вызов browser-sync для онлайн-слежения за изменениями в браузерах
gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

//babel - для преобразования jsx файлов в js (заметка: дополнительно еще нужен babel-preset-react!!!) npm install --save-dev babel-preset-react 
gulp.task('babel', () =>
		gulp.src('app/jsx/*.jsx')
			.pipe(babel({
				presets: ['react']
			}))
			.pipe(gulpif('*.js', uglify()))
			.pipe(gulp.dest('app/js'))
);

//взять все части преобразованых jsx файлов и обьединить их в один минифицированный
gulp.task('concat', function() {
  gulp.src(['./app/js/content.js', './app/js/header.js'])
    .pipe(concat('common_react.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js/'))
});


//слежка всех изменений онлайн
gulp.task('watch', ['browser-sync', 'scss'], function (){
	gulp.watch('app/jsx/*.jsx', ['babel']);
	gulp.watch('app/js/*.js', ['concat']);
	gulp.watch('app/scss/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

//определяем какие задачи будут исполнятся по-умолчанию(вызов gulp)
gulp.task('default', ['watch']);