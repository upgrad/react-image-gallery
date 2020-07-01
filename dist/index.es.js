import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

var css = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700&display=swap\");\n\n* {\n\tbox-sizing: border-box;\n}\n\n.styles_overlay__CLSq- {\n\twidth: inherit;\n\theight: inherit;\n\tbackground-color: black;\n\topacity: 0.5;\n\tposition: absolute;\n\tz-index: 1;\n\tdisplay: none;\n}\n\n.styles_isOverlayActive__298UW {\n\tdisplay: block;\n}\n\n.styles_modal__gNwvD {\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: 9999;\n\n\tletter-spacing: normal;\n\tfont-family: \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial,\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\t-ms-text-size-adjust: 100%;\n\t-webkit-text-size-adjust: 100%;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-font-smoothing: antialiased;\n\ttext-rendering: geometricPrecision;\n\tfont-variant-ligatures: common-ligatures;\n\n\theight: 100vh;\n\tmin-width: 576px;\n\twidth: 30%;\n\topacity: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: #fff;\n\tborder: 1px solid rgba(0, 0, 0, 0.0485734);\n\tbox-sizing: border-box;\n\tbox-shadow: -24px 16px 56px rgba(0, 0, 0, 0.239781);\n\ttransition: transform 200ms cubic-bezier(0.4, 0.14, 0.3, 1);\n\ttransform: translateX(720px);\n}\n\n.styles_isModalActive__3XSNX {\n\ttransform: translateX(0);\n}\n\n.styles_header__3PFGX {\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 86px;\n\tbackground: #ffffff;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 16px;\n\tbox-sizing: border-box;\n\n\tfont-weight: 600;\n\tfont-size: 18px;\n\tline-height: 24px;\n\n\tdisplay: flex;\n\talign-items: flex-start;\n\tletter-spacing: 0.168px;\n\n\tcolor: rgba(0, 0, 0, 0.7);\n\tborder-bottom: 1px solid #e7e8f0;\n}\n\n.styles_navList__33BO0 {\n\tmin-width: 400px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-top: 12px;\n\tmargin-left: -16px;\n}\n\n.styles_navList__33BO0 li {\n\tlist-style: none;\n}\n\n.styles_navItem__XZgfa {\n\tlist-style: none;\n\tposition: relative;\n\tdisplay: inline-block;\n\theight: 34px;\n\ttext-align: center;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tcolor: #aaa;\n\tpadding: 4px 16px;\n\tborder-bottom: 2px solid transparent;\n\ttransition: all 200ms cubic-bezier(0.4, 0.14, 0.3, 1);\n\tcursor: pointer;\n}\n\n.styles_navItem__XZgfa:hover {\n\tcolor: #a1a1a1;\n}\n\n.styles_navItemActive__17Uio {\n\tborder-color: #298ee2;\n\tcolor: #4a4a4a;\n}\n\n.styles_closeBtn__1A6KW {\n\tposition: absolute;\n\tright: 16px;\n\ttop: 12px;\n\twidth: 32px;\n\theight: 32px;\n\tcursor: pointer;\n\tbackground-color: rgba(217, 217, 217, 0.4);\n\tborder-radius: 50%;\n\tpadding: 6px;\n}\n\n.styles_closeBtn__1A6KW svg path {\n\tfill: #b4b7bc;\n}\n\n.styles_note__2WdlX {\n\tfont-size: 12px;\n\tcolor: #ec454d;\n\tfont-weight: 600;\n\tmargin: 12px;\n\tborder-radius: 4px;\n\tpadding: 16px;\n\tbackground: rgba(236, 69, 77, 0.1);\n}\n\n/* Misc */\n\n.styles_galleryInput__6RZOY {\n\tborder: 1px solid #e0e0e0;\n\tborder-radius: 4px;\n\tpadding: 0 10px;\n\theight: 40px;\n\tcolor: #4c4c56;\n\tresize: none;\n\twidth: 100%;\n\tfont-size: 14px;\n\tmargin-bottom: 20px;\n\ttransition: 200ms cubic-bezier(0.4, 0.14, 0.3, 1) all;\n}\n\n.styles_galleryInput__6RZOY:focus {\n\tborder: 1px solid #298ee2;\n\toutline: none;\n}\n\n.styles_galleryButton__2bkqr {\n\t\tborder: none;\n\t    background: #2FCB53;\n\t    border-radius: 2px;\n\t    color: white;\n\t    cursor: pointer;\n\t    font-style: normal;\n\t    font-weight: bold;\n\t    font-size: 14px;\n\t    line-height: 19px;\n\t    text-align: center;\n\t    text-transform: uppercase;\n}\n\n.styles_galleryButton__2bkqr:focus {\n\toutline: transparent;\n}\n\n.styles_galleryLoading__3gL47 {\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n}\n\n.styles_galleryLoading__3gL47:after {\n  content: \" \";\n  display: block;\n  width: 26px;\n  height: 26px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #ec454d;\n  border-color: #ec454d transparent #ec454d transparent;\n  animation: styles_galleryLoading__3gL47 1.2s linear infinite;\n}\n\n@keyframes styles_galleryLoading__3gL47 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
var homeStyles = { "overlay": "styles_overlay__CLSq-", "isOverlayActive": "styles_isOverlayActive__298UW", "modal": "styles_modal__gNwvD", "isModalActive": "styles_isModalActive__3XSNX", "header": "styles_header__3PFGX", "navList": "styles_navList__33BO0", "navItem": "styles_navItem__XZgfa", "navItemActive": "styles_navItemActive__17Uio", "closeBtn": "styles_closeBtn__1A6KW", "note": "styles_note__2WdlX", "galleryInput": "styles_galleryInput__6RZOY", "galleryButton": "styles_galleryButton__2bkqr", "galleryLoading": "styles_galleryLoading__3gL47" };
styleInject(css);

var css$1 = ".grid_searchWrapper__3-vIN {\n\tposition: relative;\n\theight:40px;\n\tmargin-top:16px;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tmargin-right: 16px;\n}\n\n.grid_searchIcon__SWJt1 {\n\tposition: absolute;\n\tleft: 26px;\n\ttop: 12px;\n}\n\n.grid_searchBar__1qck2 {\n\tmargin-top: 100px;\n\twidth: 60%;\n\tmargin: 0px 16px;\n\theight: 100%;\n\tpadding: 10px 36px;\n\tbackground: #ffffff;\n\tbox-sizing: border-box;\n\tborder: 1px solid #e7e8f0;\n\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0877491);\n\tborder-radius: 4px;\n\tfont-style: normal;\n\tfont-size: 13px;\n\tline-height: 19px;\n}\n\n.grid_searchButton__K5Cqp{\n\theight:100%;\n\twidth:15%\n}\n\n.grid_grid__vYO3q {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\toverflow-x: scroll;\n\tjustify-content: center;\n\tmargin: 0;\n\tmargin-top: 10px;\n\theight: 73vh;\n\tpadding: 24px 0;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-thumb {\n\tbackground-color: rgba(74, 86, 96, 0.51);\n\tvisibility: visible;\n\tborder-radius: 7px;\n}\n\n.grid_customScrollBar__1V4bf::-webkit-scrollbar-thumb:hover {\n\tbackground-color: lighten(#262626, 15%);\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 {\n\tposition: relative;\n\tmargin: 5px;\n\twidth: 45%;\n\theight: 150px;\n\tborder: 1px solid grey;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(255, 255, 255, 1);\n\n\tbackground-image: -moz-linear-gradient(\n\t\t\t45deg,\n\t\t\t#f1f1f1 25%,\n\t\t\ttransparent 25%,\n\t\t\ttransparent 75%,\n\t\t\t#f1f1f1 75%,\n\t\t\t#f1f1f1 100%\n\t\t),\n\t\t-moz-linear-gradient(45deg, #f1f1f1 25%, transparent 25%, transparent\n\t\t\t\t\t75%, #f1f1f1 75%, #f1f1f1 100%);\n\tbackground-image: -webkit-linear-gradient(\n\t\t\t45deg,\n\t\t\t#f1f1f1 25%,\n\t\t\ttransparent 25%,\n\t\t\ttransparent 75%,\n\t\t\t#f1f1f1 75%,\n\t\t\t#f1f1f1 100%\n\t\t),\n\t\t-webkit-linear-gradient(45deg, #f1f1f1 25%, transparent 25%, transparent\n\t\t\t\t\t75%, #f1f1f1 75%, #f1f1f1 100%);\n\tbackground-size: 20px 20px;\n\tbackground-position: 0 0, 50px 50px;\n\tborder: 1px solid #e5e5e5;\n\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n\n.grid_grid__vYO3q .grid_gridImageDarkWrapper__1for2 {\n\tbackground-size: 20px 20px;\n\tbackground-position: bottom;\n\tbackground-color: #ffffff;\n\tbackground-image: linear-gradient(\n\t\t\tto right,\n\t\t\trgba(0, 0, 0, 0.3) 50%,\n\t\t\ttransparent 50%,\n\t\t\ttransparent\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto right,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0) 50%\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto bottom,\n\t\t\trgba(0, 0, 0, 0.3) 50%,\n\t\t\ttransparent 50%,\n\t\t\ttransparent\n\t\t),\n\t\tlinear-gradient(\n\t\t\tto bottom,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0) 50%\n\t\t),\n\t\tlinear-gradient(to bottom, #ffffff 50%, transparent 50%, transparent),\n\t\tlinear-gradient(\n\t\t\tto right,\n\t\t\ttransparent 0%,\n\t\t\ttransparent 50%,\n\t\t\trgba(0, 0, 0, 0.5) 50%\n\t\t),\n\t\tnone;\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 .grid_gridImage__2ye62 {\n\tpadding: 5px;\n\tbox-sizing: border-box;\n\theight: auto;\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 .grid_gridOverlay__15JFm{\n\tbackground-color: rgb(256,0,0,0.5);\n\tpadding: 5px;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight:100%;\n\tposition: absolute;\n}\n\n.grid_grid__vYO3q .grid_gridImageWrapper__SoCX8 .grid_gridFooter__2h9-r{\n\tbackground-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.1));\n\twidth: 100%;\n\theight: 20%;\n\tbottom: 0;\n\tposition: absolute;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tpadding-left: 5px;\n\tpadding-bottom: 5px;\n}\n\n.grid_selectionBar__3eafz{\n\tposition: fixed;\n\tbottom:0;\n\tdisplay: flex;\n\talign-items: center;\n \tjustify-content: space-between;\n\theight: 5vh;\n\twidth: 100%;\n\tbackground-color: #e6e6e6;\n\tpadding: 30px 20px;\n}\n\n.grid_selectionBarButtons__33Utj {\n\tdisplay: flex;\n}\n\n.grid_previewButton__s1mn2 {\n\tpadding: 5px 15px;\n\tmargin-left: 10px;\n\tbackground: rgb(45, 89, 156);\n}\n\n.grid_selectionButton__17mvC{\n\tpadding: 5px 15px;\n\tmargin-left: 10px;\n}\n\n.grid_info__1aAKu{\n\tmargin-top: 100px;\n}\n";
var styles = { "searchWrapper": "grid_searchWrapper__3-vIN", "searchIcon": "grid_searchIcon__SWJt1", "searchBar": "grid_searchBar__1qck2", "searchButton": "grid_searchButton__K5Cqp", "grid": "grid_grid__vYO3q", "customScrollBar": "grid_customScrollBar__1V4bf", "gridImageWrapper": "grid_gridImageWrapper__SoCX8", "gridImageDarkWrapper": "grid_gridImageDarkWrapper__1for2", "gridImage": "grid_gridImage__2ye62", "gridOverlay": "grid_gridOverlay__15JFm", "gridFooter": "grid_gridFooter__2h9-r", "selectionBar": "grid_selectionBar__3eafz", "selectionBarButtons": "grid_selectionBarButtons__33Utj", "previewButton": "grid_previewButton__s1mn2", "selectionButton": "grid_selectionButton__17mvC", "info": "grid_info__1aAKu" };
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

var defaultIcon = "data:image/png;base64,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";

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

var SafeImage = function (_React$Component) {
	inherits(SafeImage, _React$Component);

	function SafeImage(props) {
		classCallCheck(this, SafeImage);

		var _this = possibleConstructorReturn(this, (SafeImage.__proto__ || Object.getPrototypeOf(SafeImage)).call(this, props));

		_this.onError = function () {
			_this.setState({
				url: defaultIcon
			});
		};

		_this.state = {
			url: props.src || defaultIcon
		};
		return _this;
	}

	createClass(SafeImage, [{
		key: 'render',
		value: function render() {
			return React.createElement('img', {
				alt: this.props.alt,
				src: this.state.url,
				onError: this.onError,
				className: this.props.className
			});
		}
	}]);
	return SafeImage;
}(React.Component);

SafeImage.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string
};

var Grid = function (_Component) {
	inherits(Grid, _Component);

	function Grid(props) {
		classCallCheck(this, Grid);

		var _this = possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

		_this.openPreview = function (url) {
			return function () {
				window.open(url, '_blank');
			};
		};

		_this.state = {
			disableCache: true,
			imageSelectedIndex: undefined,
			loading: false
		};
		_this.searchInputEle = React.createRef();
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
				isGrid: true,
				disableCache: false,
				loading: false
			});

			this.props.setImages(images);

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
		key: "reset",
		value: function reset() {
			this.setState({
				imageSelectedIndex: undefined
			});
			this.updateGlobalDataLocally([]);
			this.searchInputEle.current.value = '';
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
				_this2.setState({
					images: [],
					isGrid: true,
					loading: false
				});
			});
		}
	}, {
		key: "selectionBar",
		value: function selectionBar() {
			var _this3 = this;

			if (this.state.imageSelectedIndex == undefined) return null;
			var imageSlug = this.props.images[this.state.imageSelectedIndex].slug;
			var url = this.props.images[this.state.imageSelectedIndex].url;
			return React.createElement(
				"div",
				{ className: styles.selectionBar },
				React.createElement(
					"span",
					null,
					imageSlug
				),
				React.createElement(
					"span",
					{ className: styles.selectionBarButtons },
					React.createElement(
						"button",
						{ className: homeStyles.galleryButton + " " + styles.previewButton, onClick: this.openPreview(url) },
						"Preview"
					),
					React.createElement(
						"button",
						{ className: homeStyles.galleryButton + " " + styles.selectionButton, onClick: function onClick() {
								return _this3.props.select(imageSlug);
							} },
						"SELECT"
					)
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return React.createElement(
				"div",
				{ style: this.props.containerStyles },
				React.createElement(
					"div",
					{ className: styles.searchWrapper },
					React.createElement(
						"svg",
						{
							fill: "none",
							preserveAspectRatio: "xMidYMid meet",
							height: "20",
							width: "20",
							className: styles.searchIcon
						},
						React.createElement("path", {
							d: "M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z",
							fill: "#90A0B7"
						})
					),
					React.createElement("input", {
						placeholder: "Search for an existing image",
						className: homeStyles.galleryInput + " " + styles.searchBar,
						onKeyUp: this.inputChange,
						ref: this.searchInputEle
					}),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this4.reset();
							}, className: homeStyles.galleryButton + " " + styles.searchButton, style: { backgroundColor: '#2d599c' } },
						"Reset"
					),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this4.search(_this4.searchInputEle.current.value);
							}, className: homeStyles.galleryButton + " " + styles.searchButton },
						"Search"
					)
				),
				React.createElement(
					"div",
					{ className: styles.grid },
					!this.state.loading && this.props.images && this.props.images.length ? this.props.images.map(function (image, i) {
						return React.createElement(
							"div",
							{
								key: image.slug,
								style: { borderColor: "" + (_this4.state.imageSelectedIndex == i ? '#ec454d' : '#e5e5e5') },
								className: styles.gridImageWrapper + "\n\t\t\t\t\t\t\t\t\t\t " + (/white/.test(image.url) ? styles.gridImageDarkWrapper : ''),
								onClick: function onClick() {
									return _this4.setState({ imageSelectedIndex: i });
								}
							},
							_this4.state.imageSelectedIndex == i && React.createElement("div", { className: styles.gridOverlay }),
							React.createElement(SafeImage, {
								alt: image.url,
								className: styles.gridImage,
								src: image.url
							}),
							React.createElement(
								"div",
								{ className: styles.gridFooter },
								image.slug
							)
						);
					}) : React.createElement(
						"div",
						{ className: styles.info },
						this.state.loading ? React.createElement("div", { className: homeStyles.galleryLoading }) : React.createElement(
							"span",
							null,
							"No files. Try searching for something."
						)
					)
				),
				this.selectionBar()
			);
		}
	}]);
	return Grid;
}(Component);

Grid.propTypes = {
	cdn: PropTypes.string,
	s3: PropTypes.object,
	server: PropTypes.string,
	select: PropTypes.func,
	containerStyles: PropTypes.object
};

var css$2 = ".uploader_uploader__1RhpY {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 10px;\n    height: 80%;\n    overflow-y: scroll;\n}\n\n.uploader_uploader__1RhpY form {\n    display: flex;\n    flex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: left;\n    width: 340px;\n}\n\n.uploader_uploader__1RhpY form .uploader_titleLabel__3dNsX {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 24px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\tcolor: #adb1b3;\n\tmargin-top: 24px;\n}\n\n.uploader_uploader__1RhpY form .uploader_title__6XJq_ {\n    padding: 10px 15px;\n    background: #ffffff;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0877491);\n    border-radius: 4px;\n    font-style: normal;\n    font-size: 13px;\n    line-height: 19px;\n}\n\n.uploader_uploader__1RhpY form .uploader_error__WDlNo {\n\tborder-color: #d33333;\n}\n\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 {\n\tbackground: rgba(86, 204, 242, 0.1);\n\tborder: 2px dashed rgba(86, 204, 242, 0.5);\n    box-sizing: border-box;\n    width: 100%;\n    height: 140px;\n    margin-top: 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.uploader_fileUploaderInput__1_Aev {\n\tbox-sizing: border-box;\n    width: 100%;\n\theight: 140px;\n\topacity: 0;\n\tz-index: 2;\n}\n\n.uploader_imagePreview__3VSdX{\n    width: 340px;\n    margin: 24px 0px;\n    display: flex;\n    flex-direction: column;\n}\n\n.uploader_clearImage__2rMOj{\n\tfont-size: 12px;\n\tcolor: blue;\n\tmargin-bottom: 5px;\n\tcursor: pointer;\n\talign-self: flex-end;\n}\n\n.uploader_previewImage__3fqi2 {\n\tdisplay: block;\n\tmargin: auto;\n\tmargin-top: 10px;\n\tmax-width: 100%;\n}\n\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 .uploader_info__3NSEz {\n    font-style: normal;\n    font-size: 14px;\n    position: absolute;\n    color: #000000;\n}\n.uploader_uploader__1RhpY form .uploader_fileUploader__2jVN9 .uploader_info__3NSEz a {\n    text-decoration: underline;\n    color: #2F80ED;\n}\n\n\n.uploader_uploader__1RhpY form .uploader_file__1ekDC {\n    margin-top: 10px;\n}\n\n.uploader_uploader__1RhpY form .uploader_submit__2mAIq {\n    margin-top: 10px;\n\theight: 40px;\n\twidth: 240px;\n\tmargin: 20px auto 0;\n    cursor: pointer;\n}\n\n.uploader_uploader__1RhpY form .uploader_submit__2mAIq:disabled {\n\topacity: 0.4;\n}\n\n.uploader_heading__1Ox1s {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 24px;\n\tline-height: 36px;\n\tmargin-bottom: 15px;\n    text-align: justify;\n    color: rgba(0, 0, 0, 0.4);\n}\n\n.uploader_hide__1T76k {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n}\n\n.uploader_errors__306yx {\n\tmargin-top: 20px;\n}\n\n.uploader_errorMessage__KwtDp {\n\tcolor: #d33333;\n\tfont-size: 0.8em;\n\tmargin: 5px 0;\n\tbackground: #ffe4e4;\n\tpadding: 5px 10px;\n\tmargin-top: 5px;\n\tborder-radius: 4px;\n}\n";
var styles$1 = { "uploader": "uploader_uploader__1RhpY", "titleLabel": "uploader_titleLabel__3dNsX", "title": "uploader_title__6XJq_", "error": "uploader_error__WDlNo", "fileUploader": "uploader_fileUploader__2jVN9", "fileUploaderInput": "uploader_fileUploaderInput__1_Aev", "imagePreview": "uploader_imagePreview__3VSdX", "clearImage": "uploader_clearImage__2rMOj", "previewImage": "uploader_previewImage__3fqi2", "info": "uploader_info__3NSEz", "file": "uploader_file__1ekDC", "submit": "uploader_submit__2mAIq", "heading": "uploader_heading__1Ox1s", "hide": "uploader_hide__1T76k", "errors": "uploader_errors__306yx", "errorMessage": "uploader_errorMessage__KwtDp" };
styleInject(css$2);

var Uploader = function (_Component) {
	inherits(Uploader, _Component);

	function Uploader(props) {
		classCallCheck(this, Uploader);

		var _this = possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, props));

		_this.fileChangeListener = function (e) {
			var files = e.target.files;
			if (files && files[0]) {
				_this.setFile(files[0]);
			}
		};

		_this.setFile = function (file) {
			_this.setState({
				imagePreviewSrc: _this.getFilePreviewUrl(file),
				form: _extends({}, _this.state.form, {
					file: file
				}),
				errors: null
			});
		};

		_this.getFilePreviewUrl = function (file) {
			return file.type && file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
		};

		_this.titleChangeListener = function (e) {
			if (!/[^\w\d-]/.test(e.target.value)) {
				_this.setState({
					form: _extends({}, _this.state.form, {
						title: e.target.value
					}),
					titleValid: true
				});
			} else {
				_this.setState({ titleValid: false });
			}
		};

		_this.clearImage = function () {
			_this.setState({
				imagePreviewSrc: null,
				form: _extends({}, _this.state.form, {
					file: null
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
			formData.append("accept", _this.props.accept);
			axios$1({
				method: "post",
				url: _this.props.server + "/upload",
				data: formData,
				config: { headers: { "Content-Type": "multipart/form-data" } }
			}).then(function (response) {
				_this.props.select(response.data.slug);
				_this.setState({ form: {} });
			}).catch(function (error) {
				alert("Sorry couldn't upload the file. Try again");
			}).finally(function () {
				_this.setState({ loading: false });
			});
		};

		_this.state = {
			form: {},
			errors: null,
			titleValid: true
		};
		return _this;
	}

	createClass(Uploader, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: styles$1.uploader, style: this.props.containerStyles },
				React.createElement(
					"form",
					null,
					this.state.form.file && React.createElement(
						"div",
						{ className: styles$1.imagePreview },
						React.createElement(
							"span",
							{ className: styles$1.clearImage, onClick: this.clearImage },
							"clear[x]"
						),
						React.createElement(SafeImage, { className: styles$1.previewImage, src: this.state.imagePreviewSrc })
					),
					!this.state.form.file && React.createElement(
						"div",
						{ className: styles$1.fileUploader },
						React.createElement("input", {
							id: "upload-file",
							encType: "multipart/form-data",
							onChange: this.fileChangeListener,
							name: "file",
							className: styles$1.fileUploaderInput,
							type: "file",
							accept: this.props.accept
						}),
						React.createElement(
							"span",
							{ className: styles$1.info },
							"Drop a file here or ",
							React.createElement(
								"a",
								null,
								"choose one by clicking here"
							)
						)
					),
					React.createElement(
						"label",
						{ className: styles$1.titleLabel },
						"File Tag",
						"*"
					),
					React.createElement("input", {
						onChange: this.titleChangeListener,
						name: "title",
						className: homeStyles.galleryInput + " " + styles$1.title + " " + (!this.state.titleValid ? styles$1.error : ''),
						type: "text",
						placeholder: "example, adidas_white_logo"
					}),
					React.createElement(
						"button",
						{
							className: homeStyles.galleryButton + " " + styles$1.submit,
							onClick: this.upload,
							disabled: !this.state.form.file || !this.state.form.title || this.state.errors || !this.state.titleValid
						},
						this.state.loading ? "Uploading..." : "UPLOAD"
					),
					this.state.errors && Array.isArray(this.state.errors) && React.createElement(
						"div",
						{ className: styles$1.errors },
						this.state.errors.map(function (e) {
							return React.createElement(
								"p",
								{ className: styles$1.errorMessage },
								e
							);
						})
					)
				)
			);
		}
	}]);
	return Uploader;
}(Component);

Uploader.propTypes = {
	s3: PropTypes.object,
	server: PropTypes.string,
	select: PropTypes.func,
	containerStyles: PropTypes.object,
	restrictions: PropTypes.object,
	accept: PropTypes.string
};

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
				tab: 'grid',
				style: _extends({}, _this.state.style, {
					width: 0
				})
			});
			setTimeout(function () {
				return _this.props.onClose(data);
			}, 200);
		};

		_this.setImages = function (images) {
			_this.setState({ images: images });
		};

		_this.state = {
			images: [],
			tab: 'grid',
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
				return React.createElement(
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

			return React.createElement(
				"div",
				{
					className: homeStyles.modal + " " + (this.props.isActive ? homeStyles.isModalActive : "")
				},
				React.createElement(
					"div",
					{ className: homeStyles.header },
					React.createElement(
						"div",
						{ className: homeStyles.title },
						"Gallery"
					),
					React.createElement(
						"ul",
						{ className: homeStyles.navList },
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{
									onClick: function onClick() {
										return _this2.setState({
											tab: 'grid'
										});
									},
									className: homeStyles.navItem + " " + (this.state.tab === 'grid' ? homeStyles.navItemActive : "")
								},
								"Search"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{
									onClick: function onClick() {
										return _this2.setState({
											tab: 'upload'
										});
									},
									className: homeStyles.navItem + " " + (this.state.tab === 'upload' ? homeStyles.navItemActive : "")
								},
								"Upload New"
							)
						)
					),
					React.createElement(
						"div",
						{
							className: homeStyles.closeBtn,
							onClick: function onClick() {
								return _this2.selectFinal();
							}
						},
						React.createElement(
							"svg",
							{
								fill: "none",
								preserveAspectRatio: "xMidYMid meet",
								height: "20",
								width: "20"
							},
							React.createElement("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M15.8334 5.34175L14.6584 4.16675L10 8.82508L5.34169 4.16675L4.16669 5.34175L8.82502 10.0001L4.16669 14.6584L5.34169 15.8334L10 11.1751L14.6584 15.8334L15.8334 14.6584L11.175 10.0001L15.8334 5.34175Z",
								fill: "#B4B7BC"
							})
						)
					)
				),
				this.spriteNote(),
				React.createElement(Grid, _extends({
					containerStyles: { display: this.state.tab === 'grid' ? '' : 'none' }
				}, this.props.config, {
					defaultSearch: this.props.isActive,
					select: this.selectFinal,
					images: this.state.images,
					setImages: this.setImages
				})),
				React.createElement(Uploader, _extends({
					containerStyles: { display: this.state.tab === 'upload' ? '' : 'none' }
				}, this.props.config, {
					select: this.selectFinal,
					restrictions: _extends({
						size: 5 * 1000 * 1000
					}, this.props.config.uploadRestrictions),
					accept: this.props.uploaderConfig.accept
				}))
			);
		}
	}]);
	return Gallery;
}(Component);

Gallery.propTypes = {
	config: PropTypes.object,
	isActive: PropTypes.bool,
	uploaded: PropTypes.func,
	uploaderConfig: PropTypes.object
};
Gallery.defaultProps = {
	config: {},
	isActive: false,
	uploaderConfig: {
		accept: '.png, .jpg, .jpeg'
	}
};

export default Gallery;
//# sourceMappingURL=index.es.js.map
