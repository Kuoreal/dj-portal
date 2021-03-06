System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "app": "js/app.js",
    "app-list": "js/app-list.js",
    "info": "js/info.js",
    "i18n": "js/i18n.js",
    "dps": "js/dps.js",
    "skins": "js/skins.js",
    "sails.io": "js/dependencies/sails.io.js",
    "dictionary": "js/dictionary.js",
    "custom-react-directives": "js/custom-react-directives.js",
    "modal-controllers": "js/modal-controllers.js",
    "widget-api": "js/widget-api.js",
    "skin-directives": "js/skin-directives.js",
    "template-cached-pages": "js/templates.js",
    "file-upload-shim": "components/ng-file-upload/angular-file-upload-shim.js",
    "file-upload": "components/ng-file-upload/angular-file-upload.js",
    "jquery": "components/jquery/dist/jquery.js",
    "angular": "components/angular/angular.js",
    "angular-mocks": "components/angular-mocks/angular-mocks.js",
    "angular-animate": "components/angular-animate/angular-animate.js",
    "angular-translate": "components/angular-translate/angular-translate.js",
    "angular-translate-loader-static-files": "components/angular-translate-loader-static-files/angular-translate-loader-static-files.js",
    "angular-translate-storage-cookie": "components/angular-translate-storage-cookie/angular-translate-storage-cookie.js",
    "angular-translate-storage-local": "components/angular-translate-storage-local/angular-translate-storage-local.js",
    "angular-ui-router": "components/angular-ui-router/release/angular-ui-router.js",
    "angular-ui-tree": "components/angular-ui-tree/dist/angular-ui-tree.js",
    "angular-clipboard": "components/angular-clipboard/angular-clipboard.js",
    "angular-scroll": "components/angular-scroll/angular-scroll.js",
    "angular-file-saver": "components/angular-file-saver/dist/angular-file-saver.bundle.js",
    "ng-ace": "js/lib/ng-ace/ng-ace.js",
    "react": "components/react/react.js",
    "react-dom": "components/react/react-dom.js",
    "ngReact": "components/ngReact/ngReact.js",
    "mousetrap": "components/mousetrap/mousetrap.js",
    "angular-hotkeys": "js/hotkeys.js",
    "ngstorage": "components/ngstorage/ngStorage.js",
    "ng-prettyjson-tmpl": "components/ng-prettyjson/src/ng-prettyjson.js",
    "ng-prettyjson": "components/ng-prettyjson/src/ng-prettyjson-tmpl.js",
    "ng-json-explorer": "components/ng-json-explorer/src/angular-json-explorer.js",
    "angular-oclazyload": "components/oclazyload/dist/ocLazyLoad.js",
    "angular-foundation": "components/angular-foundation/mm-foundation-tpls.js",
    "angular-json-editor": "components/angular-json-editor/src/angular-json-editor.js",
    "json-editor": "components/json-editor/dist/jsoneditor.js",
    "angular-cookies": "components/angular-cookies/angular-cookies.js",
    "sceditor": "components/SCEditor/minified/jquery.sceditor.min.js",
    "leaflet": "components/leaflet/dist/leaflet.js",
    "angular-leaflet": "components/angular-leaflet/dist/angular-leaflet-directive.js",
    "d3": "components/d3/d3.js",
    "d3.layout.cloud": "components/d3.layout.cloud/build/d3.layout.cloud.js",
    "d3.timer": "components/d3.timer/index.js",
    "jsinq": "components/jsinq/source/jsinq.js",
    "jsinq-query": "components/jsinq/source/jsinq-query.js",
    "json-stat": "components/jsonstat/json-stat.max.js",
    "date-and-time": "components/date-and-time/date-and-time.js",
    "nv.d3": "components/nvd3/nv.d3.js",
    "wizard-directives": "widgets/v2.steps/wizard-directives.js",
    "md5": "components/md5/js/md5.js",
    "pretty-data": "js/lib/pretty-data/pretty-data.js",
    "*": "*.js",
    "github:*": "../../jspm_packages/github/*.js"
  }
});

System.config({
  "meta": {
    "file-upload-shim": {
      "deps": []
    },
    "angular": {
      "deps": [
        "jquery",
        "file-upload-shim"
      ],
      "exports": "angular"
    },
    "file-upload": {
      "deps": [
        "angular"
      ]
    },
    "jquery": {
      "exports": "$"
    },
    "json-editor": {
      "deps": [
        "sceditor"
      ],
      "exports": "JSONEditor"
    },
    "angular-mocks": {
      "deps": [
        "angular"
      ]
    },
    "angular-animate": {
      "deps": [
        "angular"
      ]
    },
    "angular-scroll": {
      "deps": [
        "angular"
      ]
    },
    "angular-file-saver": {
      "deps": [
        "angular"
      ]
    },
    "angular-translate": {
      "deps": [
        "angular"
      ]
    },
    "angular-translate-loader-static-files": {
      "deps": [
        "angular-translate"
      ]
    },
    "angular-translate-storage-cookie": {
      "deps": [
        "angular-translate",
        "angular-cookies"
      ]
    },
    "angular-translate-storage-local": {
      "deps": [
        "angular-translate",
        "angular-translate-storage-cookie"
      ]
    },
    "angular-ui-router": {
      "deps": [
        "angular"
      ]
    },
    "angular-ui-tree": {
      "deps": [
        "angular"
      ]
    },
    "ng-ace": {
      "deps": [
        "angular"
      ]
    },
    "ngstorage": {
      "deps": [
        "angular"
      ]
    },
    "ng-prettyjson": {
      "deps": [
        "angular",
        "ng-prettyjson-tmpl"
      ]
    },
    "ng-json-explorer": {
      "deps": [
        "angular"
      ]
    },
    "react": {
      "exports": "React"
    },
    "ngReact": {
      "deps": [
        "react",
        "react-dom"
      ]
    },
    "custom-react-directives": {
      "deps": [
        "angular",
        "ngReact"
      ]
    },
    "wizard-directives": {
      "deps": [
        "angular",
        "ngReact"
      ]
    },
    "md5": {
      "exports": "md5"
    },
    "angular-hotkeys": {
      "deps": [
        "mousetrap",
        "angular"
      ]
    },
    "angular-oclazyload": {
      "deps": [
        "angular"
      ]
    },
    "angular-foundation": {
      "deps": [
        "angular"
      ]
    },
    "angular-json-editor": {
      "deps": [
        "angular",
        "json-editor"
      ]
    },
    "angular-cookies": {
      "deps": [
        "angular"
      ]
    },
    "sceditor": {
      "deps": [
        "jquery"
      ]
    },
    "leaflet": {
      "exports": "L"
    },
    "angular-leaflet": {
      "deps": [
        "angular",
        "leaflet"
      ]
    },
    "d3": {
      "exports": "d3"
    },
    "jsinq": {
      "exports": "jsinq"
    },
    "jsinq-query": {
      "deps": [
        "jsinq"
      ]
    },
    "json-stat": {
      "exports": "JSONstat"
    },
    "date-and-time": {
      "exports": "date"
    },
    "pretty-data": {
      "exports": "pd"
    },
    "nv.d3": {
      "exports": "nv",
      "deps": [
        "d3"
      ]
    },
    "d3.layout.cloud": {
      "exports": "d3.layout.cloud",
      "deps": [
        "d3"
      ]
    },
    "d3.timer": {
      "exports": "d3.timer",
      "deps": [
        "d3"
      ]
    }
  }
});

System.config({
  "map": {
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87"
  }
});

