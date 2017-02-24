'use strict';

exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app/,
                'js/vendor.js': /^(?!app)/
            }
        },
        stylesheets: {
            joinTo: 'css/style.css'
        }
    },
    conventions: {
        assets: /(assets|pages)[\\/]/
    },
    watcher: {
        awaitWriteFinish: true
    }
};

