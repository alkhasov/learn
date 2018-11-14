var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "javascript"
    }
  });

  gulp.watch("javascript/**/*").on("change", browserSync.reload);
});
