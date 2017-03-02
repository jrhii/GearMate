var gulp = require('gulp');
var babel = require('gulp-babel');

function swallow(error) {
    console.error(error.toString());

    this.emit('end');
}

const SOURCE_FILES_JS = ['server/src/**/*.js'];

gulp.task('babel', () => {
    return gulp.src(SOURCE_FILES_JS)
        .pipe(babel())
        .on('error', swallow)
        .pipe(gulp.dest('server/dist'));
});

gulp.task('watch', ['babel'], () => {
    gulp.watch('server/src/**/*', ['babel']);
});

gulp.task('default', ['babel']);