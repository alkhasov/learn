const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const stylus = require("gulp-stylus");
const pug = require("gulp-pug");

const pugFiles = "pug_stylus/**/*.pug";
const stylusFiles = "pug_stylus/**/*.stylus";

gulp.task("watch-js", function() {
  browserSync.init({
    server: {
      baseDir: "javascript"
    }
  });

  gulp.watch("javascript/**/*").on("change", browserSync.reload);
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "pug_stylus"
    }
  });
  gulp.watch(stylusFiles, ["stylus"]);
  gulp.watch(pugFiles, ["pug"]);
  gulp.watch("pug_stylus/*").on("change", browserSync.reload);
});

gulp.task("stylus", function() {
  return gulp
    .src(stylusFiles)
    .pipe(stylus())
    .pipe(gulp.dest("pug_stylus"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("pug", function() {
  return gulp
    .src(pugFiles)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("pug_stylus"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("cook", ["stylus", "pug"]);
