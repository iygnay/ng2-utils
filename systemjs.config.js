/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

// console.log('System.baseURL', System.baseURL);

(function (global) {
  var config = {
    paths: {
      'npm:': '/node_modules/'
    },

    map: {
      // our app is within the app folder
      app: '/build/jit',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
       app: {
        main: './main.js',
        defaultExtension: 'js'
      },

      base: {
        main: './main.js',
        defaultExtension: 'js'
      },

      rxjs: {
        defaultExtension: 'js'
      },

      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  };

  if (!System.baseURL)
    config.baseURL = '/';

  System.config(config);
  console.log('system.config.js', System.baseURL);
})(this);