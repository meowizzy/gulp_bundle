import { src, dest } from 'gulp';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';
import gulpSass from 'gulp-sass';
import sass from 'node-sass';
import browserSync from "browser-sync";

const scss = gulpSass(sass);

export function buildScss({ path }) {
    return () => src(path.getStylePath())
        .pipe(scss().on('error', scss.logError))
        .pipe(concat(`${path.entryPointFilename}.min.css`))
        .pipe(cleanCss())
        .pipe(dest(path.getStylesDest()))
        .pipe(browserSync.stream())
}