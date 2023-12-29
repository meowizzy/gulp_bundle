import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import strip from 'gulp-strip-comments';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

export function buildScripts({ path }) {

    return () => src(path.getEntryPointPath())
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(strip())
                .pipe(concat(`${path.entryPointFilename}.min.js`))
                .pipe(uglify())
                .pipe(dest(path.getScriptsDest()))
}