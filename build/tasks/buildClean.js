import { src, dest } from 'gulp';
import clean from 'gulp-clean';

export function buildClean({ path }) {
    return () => src(`${path.dest}/*`)
        .pipe(clean({force: true}))
        .pipe(dest(path.dest))
}