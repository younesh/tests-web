// See http://brunch.io for documentation.
// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  // stylesheets: { joinTo: 'app.css' }
  stylesheets: {
    joinTo: {
      'css/app.css': /^app\/scss/,
      'css/vendor.css': /^app\/vendor\/css/
    }
  }
};

exports.plugins = {
  babel: { presets: ['latest'] }
};


/*
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
*/