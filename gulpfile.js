const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');

// Tarefa para compilar o Sass para CSS
function compileSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

// Tarefa para compressão de imagens
function compressImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa para compressão e obfuscação de código JavaScript
function minifyJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./dist/js'));
}

// Tarefa de watch
function watch() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImages));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(minifyJS));
}

// Tarefa padrão que executa todas as tarefas
const build = gulp.parallel(compileSass, compressImages, minifyJS);

// Export das tarefas
exports.compileSass = compileSass;
exports.compressImages = compressImages;
exports.minifyJS = minifyJS;
exports.watch = watch;
exports.build = build;

// Tarefa padrão
exports.default = build;
