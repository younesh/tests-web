exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app/,
      'js/vendor.js': /^node_modules/,
    },
  },
  stylesheets: { joinTo: 'css/app.css' },
};

exports.plugins = {
  copycat: {
    "js": ['node_modules/html5shiv/dist/html5shiv.js'],
    "fonts": ['node_modules/font-awesome/fonts'],
    verbose : true,
    onlyChanged: true,
  },
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap',
    selectpicker: 'bootstrap-select',
    datepicker: 'bootstrap-datepicker',
  },
  styles: {
     /*   bootstrap:
    ['dist/css/bootstrap.css'],
    "bootstrap-select": ['dist/css/bootstrap-select.css'],
    "bootstrap-datepicker": ['dist/css/bootstrap-datepicker.css'],
    "bootstrap-datepicker": ['dist/css/bootstrap-datepicker.css'],
    "font-awesome" : ['css/font-awesome.css'], */
  },
};

exports.watcher = {
  awaitWriteFinish : true,
}