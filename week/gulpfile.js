var gulp = require('gulp');//引入gulp
var concat = require('gulp-concat');//合并
var rename = require('gulp-rename');//重命名
var minCss = require('gulp-clean-css');//压缩css
var uglify = require('gulp-uglify');//压缩js
var connect = require('gulp-connect');//服务器
var watch = require('gulp-watch');//监听
gulp.task('minJs',function(){
    gulp.src(['./demo.js','./script.js'])//合并js
        .pipe(uglify())//压缩
        .pipe(concat('hebing.js'))//合并
        .pipe(rename('hebing.min.js'))//重命名
        .pipe(gulp.dest('./item/'))//输出到item文件夹
});
gulp.task('minCss',function(){
    gulp.src(['./style.css','./styles.css'])
        .pipe(minCss())
        .pipe(concat('all.css'))//合并css
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./item/'))//输出到item文件夹
});
gulp.task('httpServer',function(){
     connect.server({
         port:8800,
         livereload:true
     })//启动服务
});
gulp.task('reload',function(){
    gulp.src('.')
        .pipe(connect.reload());//刷新浏览器
})
gulp.task('watch',function(){
    gulp.watch(['./demo.js','./script.js'],['minJs']);
    gulp.watch(['./style.css','./styles.css'],['minCss']);
    gulp.watch(['./style.css','./styles.css','./demo.js','./script.js','./index.html'],['reload'])
})//监听

gulp.task('default',['httpServer','minJs','minCss','watch']);//执行任务