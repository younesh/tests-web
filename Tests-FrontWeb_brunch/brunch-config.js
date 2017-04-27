'use strict';

exports.config = {  /* commute n-1 */
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app\/js/,
                'js/vendor.js': /^app\/vendor/
            }
        },
        stylesheets: {
            joinTo: {
                'css/style.css': /^app\/scss/,
                'css/vendor.css': /^app\/vendor/
            }
        }
    },
    conventions: {
        assets: /(assets|pages)[\\/]/
    },
    plugins: {
        sass: {
            debug: 'comments'
        }
    },
    watcher: {
        awaitWriteFinish: true
    }
};
