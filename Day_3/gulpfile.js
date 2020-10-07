var gulp = require("gulp"),
  babel = require("gulp-babel");

gulp.task("build", function () {
  return gulp.src("./es6.js").pipe(babel()).pipe(gulp.dest("./build"));
});
