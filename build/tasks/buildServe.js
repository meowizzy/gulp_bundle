import { series } from "gulp";
import { watch } from "browser-sync";
import { buildReload } from "../helpers/buildReload";
import browserSync from "browser-sync";

const bs = browserSync.create();

export function buildServe({ path, scripts, styles }) {
    return () => {
        browserSync.init({
            proxy: 'http://calltoaction',
            host: 'calltoaction',
            open: "external"
        });
        watch(path.getScriptsPath(), series(scripts, buildReload));
        watch(path.getStylePath(), styles);
        watch(path.getTemplatesPath()).on("change", browserSync.reload)
    }
}