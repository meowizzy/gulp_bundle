import { path } from "./build/config/path";
import { series, parallel } from 'gulp';
import { buildScripts, buildClean, buildScss, buildFonts, buildServe } from "./build/tasks";


const scripts = buildScripts({ path });
const fonts = buildFonts({ path });
const clean = buildClean({ path });
const styles = buildScss({ path });

const serve = buildServe({
    path,
    scripts,
    styles
})


export {
    clean,
    styles,
    scripts,
    fonts
}


export default series(clean, fonts, parallel(styles, scripts, serve));

