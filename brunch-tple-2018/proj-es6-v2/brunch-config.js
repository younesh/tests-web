// See http://brunch.io for documentation.
exports.files = {
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
};

exports.conventions = {
  assets: /(assets|pages)[\\/]/
};

exports.watcher = {
  awaitWriteFinish: true
}

exports.plugins = {
  babel: {presets: ['latest']},
  staticHandlebars: {
    outputDirectory: 'app/pages'
  }
};
