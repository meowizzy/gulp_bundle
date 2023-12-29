import browserSync from 'browser-sync';

export function buildReload() {
    return (done) => {
        browserSync.reload();
        done();
    }
}