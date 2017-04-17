var gulp = require('gulp'),
    gulp_typescript = require('gulp-typescript'),
    del = require('del'),
	typescriptConfig = require('./tsconfig.json'),
	livereload = require('gulp-livereload')
    connect = require('gulp-connect');
	
gulp.task('buildlist',['clean','ts','html','css', 'connect'], function(){
  console.log('Gulp Default');
})

gulp.task('connect', function(){
  connect.server({
    livereload:true,
	port:8090,
	root:'./mydist/'
  })
})

gulp.task('clean', function(){
  return del('mydist/**/*');
})	

gulp.task('ts', function(){
  gulp.src('src/**/*.ts')
    .pipe(gulp_typescript(typescriptConfig.compilerOptions))
	.pipe(gulp.dest('mydist/'))
})

gulp.task('html', function(){
  gulp.src('src/**/*.html')
	.pipe(gulp.dest('mydist/'))
})

gulp.task('css', function(){
  gulp.src('src/**/*.css')
	.pipe(gulp.dest('mydist/'))
})