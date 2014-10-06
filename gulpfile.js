/**
 * This script is based on https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
 * Created by rodrigopavezi on 10/6/14.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var bower       = require('bower');
var del         = require('delete');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build-dev', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Build the Jekyll Site for PRODUCTION
 */
gulp.task('jekyll-build-prod', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml,_config_prod.yml'], {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build-dev'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * Install bower dependencies
 */
gulp.task('bower-install', function(cb){
    bower.commands.install([], {save: true}, {})
        .on('end', function(installed){
            cb(); // notify gulp that this task is finished
        });
});

/**
 * Clean bower cache
 */
gulp.task('bower-clean-cache', function(cb){
    bower.commands.cache.clean([], {}, {})
        .on('end', function(clened){
            cb(); // notify gulp that this task is finished
        });
});

/**
 *  Remove all bower dependencies
 */
gulp.task('bower-rm', function(cb){
    del.sync('assets/components');
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Do a bower clean install
 */
gulp.task('bower-clean-install', ['bower-rm', 'bower-clean-cache','bower-install']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
