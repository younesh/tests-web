'use strict';

exports.config = {
    files: {
        javascripts: {
            joinTo: {
               //   'js/vendor.js': /^app\/ext_lib/ // (!)  marche pas :(
                'js/app.js': /^app\/js/

            }
        },
        stylesheets: {
            joinTo: 'css/style.css'
        }
    },
    conventions: {
        assets: /(assets|pages)[\\/]/
    },
    /*  assetsmanager: { // pas marcher ds mon cas
        copyTo: {
            '/app/assets/scss/myBootsrap' : ['/node_modules/bootstrap-sass/*']
        }
    }, */
    plugins: {
        copycat: {
            "fonts": ["node_modules/bootstrap-sass/assets/fonts/bootstrap"] // copy node_modules/bootstrap-sass/assets/fonts/bootstrap/* to priv/static/fonts/
        },
        sass: {
            debug: 'comments'
        }
    },
    watcher: {
        awaitWriteFinish: true
    }
};
