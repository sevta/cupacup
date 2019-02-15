// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"pages/Home/Index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img\\header.jpg":[["header.8847c8f9.jpg","pages/Home/img/header.jpg"],"pages/Home/img/header.jpg"],"./img\\candy-1.png":[["candy-1.79c93424.png","pages/Home/img/candy-1.png"],"pages/Home/img/candy-1.png"],"./img\\star-1.png":[["star-1.61e9137a.png","pages/Home/img/star-1.png"],"pages/Home/img/star-1.png"],"./img\\candy-2.png":[["candy-2.16eb531f.png","pages/Home/img/candy-2.png"],"pages/Home/img/candy-2.png"],"./img\\star-2.png":[["star-2.02438387.png","pages/Home/img/star-2.png"],"pages/Home/img/star-2.png"],"./img\\awsem-logo.png":[["awsem-logo.0c03fa08.png","pages/Home/img/awsem-logo.png"],"pages/Home/img/awsem-logo.png"],"./img\\prizes-bg.jpg":[["prizes-bg.8327522c.jpg","pages/Home/img/prizes-bg.jpg"],"pages/Home/img/prizes-bg.jpg"],"./img\\prizes\\ornament.png":[["ornament.5b5d590c.png","pages/Home/img/prizes/ornament.png"],"pages/Home/img/prizes/ornament.png"],"./img\\prizes\\prize-1.png":[["prize-1.dd8d6952.png","pages/Home/img/prizes/prize-1.png"],"pages/Home/img/prizes/prize-1.png"],"./img\\prizes\\prize-2.png":[["prize-2.71a685b3.png","pages/Home/img/prizes/prize-2.png"],"pages/Home/img/prizes/prize-2.png"],"./img\\prizes\\prize-3.png":[["prize-3.e2abce0e.png","pages/Home/img/prizes/prize-3.png"],"pages/Home/img/prizes/prize-3.png"],"./img\\prizes\\prize-4.png":[["prize-4.ee20dac9.png","pages/Home/img/prizes/prize-4.png"],"pages/Home/img/prizes/prize-4.png"],"./img\\howto\\petir.png":[["petir.a0acc9d7.png","pages/Home/img/howto/petir.png"],"pages/Home/img/howto/petir.png"],"./img\\howto\\howto-bg.jpg":[["howto-bg.52f4b187.jpg","pages/Home/img/howto/howto-bg.jpg"],"pages/Home/img/howto/howto-bg.jpg"],"./img\\section-product\\section-product-bg.jpg":[["section-product-bg.80ec358d.jpg","pages/Home/img/section-product/section-product-bg.jpg"],"pages/Home/img/section-product/section-product-bg.jpg"],"./img\\section-product\\ornament.1.png":[["ornament.1.7904ee9d.png","pages/Home/img/section-product/ornament.1.png"],"pages/Home/img/section-product/ornament.1.png"],"./img\\section-product\\title-product-bg.png":[["title-product-bg.b93836b2.png","pages/Home/img/section-product/title-product-bg.png"],"pages/Home/img/section-product/title-product-bg.png"],"./img\\section-product\\product-1.png":[["product-1.7ded0a1a.png","pages/Home/img/section-product/product-1.png"],"pages/Home/img/section-product/product-1.png"],"./img\\section-product\\cupacup-hires.png":[["cupacup-hires.905b54c0.png","pages/Home/img/section-product/cupacup-hires.png"],"pages/Home/img/section-product/cupacup-hires.png"],"./img\\section-product\\product-2.png":[["product-2.ed451f5a.png","pages/Home/img/section-product/product-2.png"],"pages/Home/img/section-product/product-2.png"],"_css_loader":"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/PageLoader/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  Vue.component('page-loader', {
    render(h) {
      return h("div", {
        "class": "page-loader fixed z-50 pin-y pin-x bg-teal flex items-center justify-center"
      }, [h("h1", ["Loading..."])]);
    }

  });
}
},{}],"pages/Home/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _Navbar = _interopRequireDefault(require("../../components/Navbar"));

require("./Index.scss");

var _PageLoader = _interopRequireDefault(require("../../components/PageLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(anime) {
  new Vue({
    el: '#home',
    components: {
      'navbar-a': _Navbar.default,
      'page-loader': _PageLoader.default
    },

    data() {
      return {
        items: ['items', 'items', 'items', 'items'],
        navbarHeight: 92,
        navbarType: 'primary'
      };
    },

    mounted() {
      this.animatedItems();
      this.onScroll();
    },

    methods: {
      animatedItems() {
        anime({
          targets: '.item',
          translateY: [100, 0],
          delay: anime.stagger(60, {
            from: 'center'
          }),
          duration: 1200,
          easing: 'easeInOutBack'
        });
      },

      onScroll() {
        window.onscroll = e => {
          let position = window.scrollY;

          if (position > this.navbarHeight) {
            console.log('okay give new navbar');
          } else {
            console.log('remove this');
          }
        };
      }

    }
  });
}
},{"../../components/Navbar":"components/Navbar/index.js","./Index.scss":"pages/Home/Index.scss","../../components/PageLoader":"components/PageLoader/index.js"}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58086" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.load([["Navbar.a75e05c1.js","components/Navbar/index.js"]]).then(function(){require("pages/Home/index.js");});
},{}]},{},["../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/Home.ab2ca240.map