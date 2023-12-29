export const path = {
    src: '/',
    dest: 'bundle/',
    entryPointFilename: 'main',

    getEntryPointPath: function () {
        return `assets/js/${this.entryPointFilename}.js`
    },

    getScriptsPath: function () {
        return `assets/js/**/*.js`
    },

    getStylePath: function () {
        return `assets/scss/**/*.scss`
    },

    getFontsPath: function () {
        return `assets/fonts/**/*`
    },

    getFontsDest: function () {
        return `${this.dest}fonts/`
    },

    getScriptsDest: function () {
        return `${this.dest}js/`
    },

    getStylesDest: function () {
        return `${this.dest}css/`
    },

    getTemplatesPath: function () {
        return `**/*.php`
    }
};