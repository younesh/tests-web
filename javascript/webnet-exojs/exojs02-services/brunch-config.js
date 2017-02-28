'use strict';

exports.config = {
    files: {
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
