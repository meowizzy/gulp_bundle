import { src, dest } from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';
export function buildFonts({ path }) {
    return () => src(path.getFontsPath())
        .pipe(ttf2woff2())
        .pipe(dest(path.getFontsDest()))
}