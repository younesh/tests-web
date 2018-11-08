'use strict';

exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app\/js/,
                'js/vendor.js': /^app\/vendor\/js/
            }
        },
        stylesheets: {
            joinTo: {
				'css/app.css': /^app\/scss/,
                'css/vendor.css': /^app\/vendor\/css/
			}
        }
    },
    conventions: {
        assets: /(assets|pages)[\\/]/
    },
    watcher: {
        awaitWriteFinish: true,
        usePolling: true,
        persistent: true
    },
    plugins: {
        staticHandlebars: {
            outputDirectory: 'app/pages'
        }
    }
};
