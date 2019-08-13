'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n\n* {\n\tbox-sizing: border-box;\n}\n\n.styles_overlay__CLSq- {\n\twidth: inherit;\n\theight: inherit;\n\tbackground-color: black;\n\topacity: 0.5;\n\tposition: absolute;\n\tz-index: 1;\n\tdisplay: none;\n}\n.styles_isOverlayActive__298UW {\n\tdisplay: block;\n}\n\n.styles_modal__gNwvD {\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: 9999;\n\n\tletter-spacing: normal;\n\tfont-family: \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial,\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\t-ms-text-size-adjust: 100%;\n\t-webkit-text-size-adjust: 100%;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-font-smoothing: antialiased;\n\ttext-rendering: geometricPrecision;\n\tfont-variant-ligatures: common-ligatures;\n\n\theight: 100vh;\n\tmin-width: 576px;\n\twidth: 30%;\n\topacity: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: #fff;\n\tborder: 1px solid rgba(0, 0, 0, 0.0485734);\n\tbox-sizing: border-box;\n\tbox-shadow: -24px 16px 56px rgba(0, 0, 0, 0.239781);\n\ttransition: transform 200ms cubic-bezier(0.4, 0.14, 0.3, 1);\n\ttransform: translateX(720px);\n}\n.styles_isModalActive__3XSNX {\n\ttransform: translateX(0);\n}\n.styles_header__3PFGX {\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 86px;\n\tbackground: #ffffff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 16px;\n\tbox-sizing: border-box;\n\n\tfont-weight: 600;\n\tfont-size: 18px;\n\tline-height: 24px;\n\n\tdisplay: flex;\n\talign-items: flex-start;\n\tletter-spacing: 0.168px;\n\n\tcolor: rgba(0, 0, 0, 0.7);\n\tborder-bottom: 1px solid #e7e8f0;\n}\n\n.styles_navList__33BO0 {\n\tmin-width: 400px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-top: 12px;\n\tmargin-left: -16px;\n}\n.styles_navList__33BO0 li {\n\tlist-style: none;\n}\n.styles_navItem__XZgfa {\n\tlist-style: none;\n\tposition: relative;\n\tdisplay: inline-block;\n\theight: 34px;\n\ttext-align: center;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tcolor: #aaa;\n\tpadding: 4px 16px;\n\tborder-bottom: 2px solid transparent;\n\ttransition: all 200ms cubic-bezier(0.4, 0.14, 0.3, 1);\n\tcursor: pointer;\n}\n\n.styles_navItem__XZgfa:hover {\n\tcolor: #a1a1a1;\n}\n.styles_navItemActive__17Uio {\n\tborder-color: #298ee2;\n\tcolor: #4a4a4a;\n}\n\n.styles_closeBtn__1A6KW {\n\tposition: absolute;\n\tright: 16px;\n\ttop: 12px;\n\twidth: 32px;\n\theight: 32px;\n\tcursor: pointer;\n\tbackground-color: rgba(217, 217, 217, 0.4);\n\tborder-radius: 50%;\n\tpadding: 6px;\n}\n.styles_closeBtn__1A6KW svg path {\n\tfill: #b4b7bc;\n}\n\n.styles_note__2WdlX {\n\tfont-size: 12px;\n\tcolor: #ec454d;\n\tfont-weight: 600;\n\tmargin: 12px;\n\tborder-radius: 4px;\n\tpadding: 16px;\n\tbackground: rgba(236, 69, 77, 0.1);\n}\n\n/* Misc */\n\n.styles_galleryInput__6RZOY {\n\tborder: 1px solid #e0e0e0;\n\tborder-radius: 4px;\n\tpadding: 0 10px;\n\theight: 40px;\n\tcolor: #4c4c56;\n\tresize: none;\n\twidth: 100%;\n\tfont-size: 14px;\n\tmargin-bottom: 20px;\n\ttransition: 200ms cubic-bezier(0.4, 0.14, 0.3, 1) all;\n}\n.styles_galleryInput__6RZOY:focus {\n\tborder: 1px solid #298ee2;\n\toutline: none;\n}\n\n.styles_galleryButton__2bkqr {\n\t\t  border: none;\n\t    background: #2FCB53;\n\t    border-radius: 4px;\n\t    color: white;\n\t    cursor: pointer;\n\t    font-style: normal;\n\t    font-weight: bold;\n\t    font-size: 14px;\n\t    line-height: 19px;\n\t    text-align: center;\n\t    text-transform: uppercase;\n}\n.styles_galleryButton__2bkqr:focus {\n\toutline: transparent;\n}\n\n\n.styles_galleryLoading__3gL47 {\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n}\n\n.styles_galleryLoading__3gL47:after {\n  content: \" \";\n  display: block;\n  width: 26px;\n  height: 26px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #ec454d;\n  border-color: #ec454d transparent #ec454d transparent;\n  animation: styles_galleryLoading__3gL47 1.2s linear infinite;\n}\n\n@keyframes styles_galleryLoading__3gL47 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
var homeStyles = { "overlay": "styles_overlay__CLSq-", "isOverlayActive": "styles_isOverlayActive__298UW", "modal": "styles_modal__gNwvD", "isModalActive": "styles_isModalActive__3XSNX", "header": "styles_header__3PFGX", "navList": "styles_navList__33BO0", "navItem": "styles_navItem__XZgfa", "navItemActive": "styles_navItemActive__17Uio", "closeBtn": "styles_closeBtn__1A6KW", "note": "styles_note__2WdlX", "galleryInput": "styles_galleryInput__6RZOY", "galleryButton": "styles_galleryButton__2bkqr", "galleryLoading": "styles_galleryLoading__3gL47" };
styleInject(css);

var css$1 = ".grid_searchWrapper__3-vIN {\n\tposition: relative;\n\theight:40px\n}\n.grid_searchIcon__SWJt1 {\n\tposition: absolute;\n\tleft: 26px;\n\ttop: 26px;\n}\n.grid_searchBar__1qck2 {\n\tmargin-top: 100px;\n\twidth: 75%;\n\tmargin: 16px 16px 0;\n\theight: 100%;\n\tpadding: 10px 36px;\n\tbackground: #ffffff;\n\tbox-sizing: border-box;\n\tborder: 1px solid #e7e8f0;\n\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0877491);\n\tborder-radius: 4px;\n\tfont-style: normal;\n\tfont-size: 13px;\n\tline-height: 19px;\n}\n.grid_searchButton__K5Cqp{\n\theight:100%;\n\twidth:15%\n}\n\n.grid_grid__vYO3q {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\toverflow-x: scroll;\n\tjustify-content: center;\n\tmargin: 0;\n\theight: 73vh;\n\tpadding: 24px 0;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-thumb {\n\tbackground-color: rgba(74, 86, 96, 0.51);\n\tvisibility: visible;\n\tborder-radius: 7px;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-thumb:hover {\n\tbackground-color: lighten(#262626, 15%);\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 {\n\tmargin: 5px;\n\twidth: 45%;\n\theight: 150px;\n\tborder: 1px solid grey;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(255, 255, 255, 1);\n\n\tbackground-image: -moz-linear-gradient(\n\t\t\t45deg,\n\t\t\t#f1f1f1 25%,\n\t\t\ttransparent 25%,\n\t\t\ttransparent 75%,\n\t\t\t#f1f1f1 75%,\n\t\t\t#f1f1f1 100%\n\t\t),\n\t\t-moz-linear-gradient(45deg, #f1f1f1 25%, transparent 25%, transparent\n\t\t\t\t\t75%, #f1f1f1 75%, #f1f1f1 100%);\n\tbackground-image: -webkit-linear-gradient(\n\t\t\t45deg,\n\t\t\t#f1f1f1 25%,\n\t\t\ttransparent 25%,\n\t\t\ttransparent 75%,\n\t\t\t#f1f1f1 75%,\n\t\t\t#f1f1f1 100%\n\t\t),\n\t\t-webkit-linear-gradient(45deg, #f1f1f1 25%, transparent 25%, transparent\n\t\t\t\t\t75%, #f1f1f1 75%, #f1f1f1 100%);\n\tbackground-size: 20px 20px;\n\tbackground-position: 0 0, 50px 50px;\n\tborder: 1px solid #e5e5e5;\n\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n\n.grid_grid__vYO3q .grid_gridImageDarkWrapper__1for2 {\n\tbackground-size: 20px 20px;\n\tbackground-position: bottom;\n\tbackground-color: #ffffff;\n\tbackground-image: linear-gradient(\n\t\t\tto right,\n\t\t\trgba(0, 0, 0, 0.3) 50%,\n\t\t\ttransparent 50%,\n\t\t\ttransparent\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto right,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0) 50%\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto bottom,\n\t\t\trgba(0, 0, 0, 0.3) 50%,\n\t\t\ttransparent 50%,\n\t\t\ttransparent\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto bottom,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0) 50%\n\t\t),\n\t\tlinear-gradient(to bottom, #ffffff 50%, transparent 50%, transparent),\n\t\tlinear-gradient(\n\t\t\tto right,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0.5) 50%\n\t\t),\n\t\tnone;\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 .grid_gridImage__2ye62 {\n\tpadding: 5px;\n\tbox-sizing: border-box;\n\theight: auto;\n}\n\n.grid_selectionBar__3eafz{\n\tposition: fixed;\n\tbottom:0;\n\tdisplay: flex;\n\talign-items: center;\n \tjustify-content: space-between;\n\theight: 5vh;\n\twidth: 100%;\n\tbackground-color: #e6e6e6;\n\tpadding: 0px 20px;\n}\n\n.grid_selectionButton__17mvC{\n\tpadding: 5px 15px;\n}\n\n.grid_info__1aAKu{\n\tmargin-top: 100px;\n}\n";
var styles = { "searchWrapper": "grid_searchWrapper__3-vIN", "searchIcon": "grid_searchIcon__SWJt1", "searchBar": "grid_searchBar__1qck2", "searchButton": "grid_searchButton__K5Cqp", "grid": "grid_grid__vYO3q", "customScrollBar": "grid_customScrollBar__1V4bf", "gridImageWrapper": "grid_gridImageWrapper__SoCX8", "gridImageDarkWrapper": "grid_gridImageDarkWrapper__1for2", "gridImage": "grid_gridImage__2ye62", "selectionBar": "grid_selectionBar__3eafz", "selectionButton": "grid_selectionButton__17mvC", "info": "grid_info__1aAKu" };
styleInject(css$1);

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

var isBuffer = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies$$1 = cookies;

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies$$1.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults_1, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults_1, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

var axios_1 = axios;

// Allow use of default import syntax in TypeScript
var default_1 = axios;
axios_1.default = default_1;

var axios$1 = axios_1;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Grid = function (_Component) {
	inherits(Grid, _Component);

	function Grid(props) {
		classCallCheck(this, Grid);

		var _this = possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

		_this.state = {
			images: [],
			disableCache: true,
			imageSelectedIndex: undefined,
			loading: false
		};
		_this.searchInputEle = React__default.createRef();
		_this.search = _this.search.bind(_this);
		_this.inputChange = _this.inputChange.bind(_this);
		return _this;
	}

	createClass(Grid, [{
		key: "componentDidUpdate",
		value: function componentDidUpdate(prevProps) {
			if (this.props.defaultSearch && prevProps.defaultSearch != this.props.defaultSearch) {
				if (window && this.props.s3.path) {
					if (!window.react_S3_Gallery || !window.react_S3_Gallery[this.props.s3.path]) this.search();else this.updateGlobalDataLocally(window.react_S3_Gallery[this.props.s3.path]);
				}
			}
		}
	}, {
		key: "updateGlobalDataLocally",
		value: function updateGlobalDataLocally(images) {
			this.setState({
				images: images,
				isGrid: true,
				disableCache: false,
				loading: false
			});

			if (!window.react_S3_Gallery) window.react_S3_Gallery = {};
			window.react_S3_Gallery[this.props.s3.path] = images;
		}
	}, {
		key: "inputChange",
		value: function inputChange(e) {
			if (e && e.key !== "Enter") return;
			var query = event && event.target.value;
			this.search(query);
		}
	}, {
		key: "search",
		value: function search(query) {
			var _this2 = this;

			query = query || '__getDefaultImgs__';
			this.setState({ loading: true });
			axios$1.post(this.props.server + "/search/" + query + "?disableCache=" + this.state.disableCache, {
				s3Bucket: this.props.s3.bucket,
				s3Path: this.props.s3.path
			}).then(function (response) {
				var images = response.data.map(function (image) {
					image.url = _this2.props.cdn + "/" + image.slug;
					return image;
				});

				_this2.updateGlobalDataLocally(images);
			}).catch(function (error) {
				this.setState({
					images: [],
					isGrid: true,
					loading: false
				});
			}).finally(function () {});
		}
	}, {
		key: "selectionBar",
		value: function selectionBar() {
			var _this3 = this;

			if (this.state.imageSelectedIndex == undefined) return null;
			var imageSlug = this.state.images[this.state.imageSelectedIndex].slug;
			return React__default.createElement(
				"div",
				{ className: styles.selectionBar },
				React__default.createElement(
					"span",
					null,
					imageSlug
				),
				React__default.createElement(
					"button",
					{ className: homeStyles.galleryButton + " " + styles.selectionButton, onClick: function onClick() {
							return _this3.props.select(imageSlug);
						} },
					"SELECT"
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return React__default.createElement(
				"div",
				null,
				React__default.createElement(
					"div",
					{ className: styles.searchWrapper },
					React__default.createElement(
						"svg",
						{
							fill: "none",
							preserveAspectRatio: "xMidYMid meet",
							height: "20",
							width: "20",
							className: styles.searchIcon
						},
						React__default.createElement("path", {
							d: "M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z",
							fill: "#90A0B7"
						})
					),
					React__default.createElement("input", {
						placeholder: "Search for an existing image",
						className: homeStyles.galleryInput + " " + styles.searchBar,
						onKeyUp: this.inputChange,
						ref: this.searchInputEle
					}),
					React__default.createElement(
						"button",
						{ onClick: function onClick() {
								return _this4.search(_this4.searchInputEle.current.value);
							}, className: homeStyles.galleryButton + " " + styles.searchButton },
						"Search"
					)
				),
				React__default.createElement(
					"div",
					{ className: styles.grid },
					!this.state.loading && this.state.images && this.state.images.length ? this.state.images.map(function (image, i) {
						return React__default.createElement(
							"div",
							{
								key: image.slug,
								style: { borderColor: "" + (_this4.state.imageSelectedIndex == i ? '#ec454d' : '#e5e5e5') },
								className: styles.gridImageWrapper + "\n\t\t\t\t\t\t\t\t\t\t " + (/white/.test(image.url) ? styles.gridImageDarkWrapper : ''),
								onClick: function onClick() {
									return _this4.setState({ imageSelectedIndex: i });
								}
							},
							React__default.createElement("img", {
								alt: image.url,
								className: styles.gridImage,
								src: image.url
							})
						);
					}) : React__default.createElement(
						"div",
						{ className: styles.info },
						this.state.loading ? React__default.createElement("div", { className: homeStyles.galleryLoading }) : React__default.createElement(
							"span",
							null,
							"No images found"
						)
					)
				),
				this.selectionBar()
			);
		}
	}]);
	return Grid;
}(React.Component);

Grid.propTypes = {
	cdn: PropTypes.string,
	s3: PropTypes.object,
	server: PropTypes.string,
	select: PropTypes.func
};

var css$2 = ".uploader_uploader__1RhpY {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px;\n    height: 80%;\n}\n\n.uploader_uploader__1RhpY form {\n    display: flex;\n    flex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: left;\n    width: 340px;\n}\n\n.uploader_uploader__1RhpY form .uploader_titleLabel__3dNsX {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 24px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\tcolor: #adb1b3;\n\tmargin-top: 24px;\n}\n\n.uploader_uploader__1RhpY form .uploader_title__6XJq_ {\n    padding: 10px 15px;\n    background: #ffffff;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0877491);\n    border-radius: 4px;\n    font-style: normal;\n    font-size: 13px;\n    line-height: 19px;\n}\n\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 {\n\tbackground: rgba(86, 204, 242, 0.1);\n\tborder: 2px dashed rgba(86, 204, 242, 0.5);\n    box-sizing: border-box;\n    width: 100%;\n    height: 140px;\n    margin-top: 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.uploader_imagePreview__3VSdX{\n    width: 340px;\n    margin: 24px 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}\n\n.uploader_clearImage__2rMOj{\n  font-size: 12px;\n  color: blue;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 .uploader_info__3NSEz {\n    font-style: normal;\n    font-size: 14px;\n    line-height: 21px;\n    text-align: justify;\n    color: #000000;\n}\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 .uploader_info__3NSEz a {\n    text-decoration: underline;\n    color: #2F80ED;\n}\n\n\n.uploader_uploader__1RhpY form .uploader_file__1ekDC {\n    margin-top: 10px;\n}\n\n.uploader_uploader__1RhpY form .uploader_submit__2mAIq {\n    margin-top: 10px;\n\t  height: 40px;\n\t  width: 240px;\n\t  margin: 20px auto 0;\n    cursor: pointer;\n}\n\n.uploader_heading__1Ox1s {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 24px;\n\t  line-height: 36px;\n\t  margin-bottom: 15px;\n    text-align: justify;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.uploader_hide__1T76k {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n}\n";
var styles$1 = { "uploader": "uploader_uploader__1RhpY", "titleLabel": "uploader_titleLabel__3dNsX", "title": "uploader_title__6XJq_", "fileUploader": "uploader_fileUploader__2jVN9", "imagePreview": "uploader_imagePreview__3VSdX", "clearImage": "uploader_clearImage__2rMOj", "info": "uploader_info__3NSEz", "file": "uploader_file__1ekDC", "submit": "uploader_submit__2mAIq", "heading": "uploader_heading__1Ox1s", "hide": "uploader_hide__1T76k" };
styleInject(css$2);

var Uploader = function (_Component) {
	inherits(Uploader, _Component);

	function Uploader(props) {
		classCallCheck(this, Uploader);

		var _this = possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, props));

		_this.drop = function (e) {
			e.stopPropagation();
			e.preventDefault();
			var file = e.dataTransfer.files && e.dataTransfer.files[0];
			if (file) _this.setState({
				imagePreviewSrc: URL.createObjectURL(file),
				form: _extends({}, _this.state.form, {
					file: file
				})
			});
			return false;
		};

		_this.changeListener = function (e) {
			_this.setState({
				imagePreviewSrc: URL.createObjectURL(e.target.files[0]),
				form: _extends({}, _this.state.form, defineProperty({}, e.target.name, e.target.files && e.target.files[0] || e.target.value))
			});
		};

		_this.clearImage = function () {
			_this.setState({
				imagePreviewSrc: undefined,
				form: _extends({}, _this.state.form, {
					file: undefined
				})
			});
		};

		_this.upload = function (e) {
			_this.setState({ loading: true });
			e.preventDefault();
			var formData = new FormData();
			formData.append("title", _this.state.form.title);
			formData.append("file", _this.state.form.file);
			formData.append("s3Bucket", _this.props.s3.bucket);
			formData.append("s3Path", _this.props.s3.path);
			axios$1({
				method: "post",
				url: _this.props.server + "/upload",
				data: formData,
				config: { headers: { "Content-Type": "multipart/form-data" } }
			}).then(function (response) {
				_this.props.select(response.data.slug);
			}).catch(function (error) {
				alert("Sorry couldn't upload the image. Try again");
			});
		};

		_this.state = {
			form: {}
		};
		return _this;
	}

	createClass(Uploader, [{
		key: "dragOver",
		value: function dragOver(event) {
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
	}, {
		key: "render",
		value: function render() {
			return React__default.createElement(
				"div",
				{ className: styles$1.uploader },
				React__default.createElement(
					"form",
					null,
					React__default.createElement(
						"div",
						{ className: styles$1.imagePreview },
						this.state.form.file && React__default.createElement(
							"span",
							{ className: styles$1.clearImage, onClick: this.clearImage },
							"clear[x]"
						),
						React__default.createElement("img", { src: this.state.imagePreviewSrc, style: { width: '100%' } })
					),
					!this.state.form.file && React__default.createElement(
						"div",
						null,
						React__default.createElement(
							"label",
							{
								onDrop: this.drop,
								onDragOver: this.dragOver,
								htmlFor: "upload-file",
								className: styles$1.fileUploader
							},
							React__default.createElement(
								"span",
								{ className: styles$1.info },
								"Drop an image here or ",
								React__default.createElement(
									"a",
									null,
									"choose a image"
								)
							)
						),
						React__default.createElement("input", {
							id: "upload-file",
							encType: "multipart/form-data",
							onChange: this.changeListener,
							name: "file",
							className: styles$1.hide,
							type: "file"
						})
					),
					React__default.createElement(
						"label",
						{ className: styles$1.titleLabel },
						"Image Tag"
					),
					React__default.createElement("input", {
						onChange: this.changeListener,
						name: "title",
						className: homeStyles.galleryInput + " " + styles$1.title,
						type: "text",
						placeholder: "example, adidas_white_logo"
					}),
					React__default.createElement(
						"button",
						{
							className: homeStyles.galleryButton + " " + styles$1.submit,
							onClick: this.upload
						},
						this.state.loading ? "Uploading Image ..." : "SUBMIT"
					)
				)
			);
		}
	}]);
	return Uploader;
}(React.Component);

var Gallery = function (_Component) {
	inherits(Gallery, _Component);

	function Gallery(props) {
		classCallCheck(this, Gallery);

		var _this = possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

		_this.selectFinal = function (slug) {
			var data = void 0;
			if (slug) {
				data = {
					imageUrl: _this.props.config.cdn + "/" + slug,
					imageSlug: slug.substr(0, slug.lastIndexOf(".")) || slug
				};
			}
			_this.setState({
				isGrid: true,
				style: _extends({}, _this.state.style, {
					width: 0
				})
			});
			setTimeout(function () {
				return _this.props.onClose(data);
			}, 200);
		};

		_this.state = {
			images: [],
			isGrid: true,
			style: _extends({}, props.config.style, {
				width: _this.props.config.style.width || 30,
				align: "flex-" + (props.config.style.align || "right")
			})
		};
		return _this;
	}

	createClass(Gallery, [{
		key: "spriteNote",
		value: function spriteNote() {
			var SPRITE_PATH = "sprites/images";
			if (this.props.config.s3.path == SPRITE_PATH) {
				return React__default.createElement(
					"span",
					{ className: homeStyles.note },
					"Note: Image slug you select would be reflected only after save."
				);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React__default.createElement(
				"div",
				{
					className: homeStyles.modal + " " + (this.props.isActive ? homeStyles.isModalActive : "")
				},
				React__default.createElement(
					"div",
					{ className: homeStyles.header },
					React__default.createElement(
						"div",
						{ className: homeStyles.title },
						"Image Gallery"
					),
					React__default.createElement(
						"ul",
						{ className: homeStyles.navList },
						React__default.createElement(
							"li",
							null,
							React__default.createElement(
								"div",
								{
									onClick: function onClick() {
										return _this2.setState({
											isGrid: !_this2.state.isGrid
										});
									},
									className: homeStyles.navItem + " " + (this.state.isGrid ? homeStyles.navItemActive : "")
								},
								"Search"
							)
						),
						React__default.createElement(
							"li",
							null,
							React__default.createElement(
								"div",
								{
									onClick: function onClick() {
										return _this2.setState({
											isGrid: !_this2.state.isGrid
										});
									},
									className: homeStyles.navItem + " " + (!this.state.isGrid ? homeStyles.navItemActive : "")
								},
								"Upload New"
							)
						)
					),
					React__default.createElement(
						"div",
						{
							className: homeStyles.closeBtn,
							onClick: function onClick() {
								return _this2.selectFinal();
							}
						},
						React__default.createElement(
							"svg",
							{
								fill: "none",
								preserveAspectRatio: "xMidYMid meet",
								height: "20",
								width: "20"
							},
							React__default.createElement("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M15.8334 5.34175L14.6584 4.16675L10 8.82508L5.34169 4.16675L4.16669 5.34175L8.82502 10.0001L4.16669 14.6584L5.34169 15.8334L10 11.1751L14.6584 15.8334L15.8334 14.6584L11.175 10.0001L15.8334 5.34175Z",
								fill: "#B4B7BC"
							})
						)
					)
				),
				this.spriteNote(),
				this.state.isGrid ? React__default.createElement(Grid, _extends({}, this.props.config, {
					defaultSearch: this.props.isActive,
					select: this.selectFinal
				})) : React__default.createElement(Uploader, _extends({}, this.props.config, {
					select: this.selectFinal
				}))
			);
		}
	}]);
	return Gallery;
}(React.Component);

Gallery.propTypes = {
	config: PropTypes.object,
	isActive: PropTypes.bool,
	uploaded: PropTypes.func
};
Gallery.defaultProps = {
	config: {},
	isActive: false
};

module.exports = Gallery;
//# sourceMappingURL=index.js.map
