module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/0-config/_variables.scss";`
            }
        }
    }
};