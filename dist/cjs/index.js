'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var axios$3 = {exports: {}};

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
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
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


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
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

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
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
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
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
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
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
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
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

var utils$9 = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
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
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

var utils$8 = utils$9;

function encode(val) {
  return encodeURIComponent(val).
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
var buildURL$1 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$8.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$8.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$8.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$8.forEach(val, function parseValue(v) {
        if (utils$8.isDate(v)) {
          v = v.toISOString();
        } else if (utils$8.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$7 = utils$9;

function InterceptorManager$1() {
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
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
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
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$7.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$6 = utils$9;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$6.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

var AxiosError_1;
var hasRequiredAxiosError;

function requireAxiosError () {
	if (hasRequiredAxiosError) return AxiosError_1;
	hasRequiredAxiosError = 1;

	var utils = utils$9;

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [config] The config.
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	function AxiosError(message, code, config, request, response) {
	  Error.call(this);
	  this.message = message;
	  this.name = 'AxiosError';
	  code && (this.code = code);
	  config && (this.config = config);
	  request && (this.request = request);
	  response && (this.response = response);
	}

	utils.inherits(AxiosError, Error, {
	  toJSON: function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code,
	      status: this.response && this.response.status ? this.response.status : null
	    };
	  }
	});

	var prototype = AxiosError.prototype;
	var descriptors = {};

	[
	  'ERR_BAD_OPTION_VALUE',
	  'ERR_BAD_OPTION',
	  'ECONNABORTED',
	  'ETIMEDOUT',
	  'ERR_NETWORK',
	  'ERR_FR_TOO_MANY_REDIRECTS',
	  'ERR_DEPRECATED',
	  'ERR_BAD_RESPONSE',
	  'ERR_BAD_REQUEST',
	  'ERR_CANCELED'
	// eslint-disable-next-line func-names
	].forEach(function(code) {
	  descriptors[code] = {value: code};
	});

	Object.defineProperties(AxiosError, descriptors);
	Object.defineProperty(prototype, 'isAxiosError', {value: true});

	// eslint-disable-next-line func-names
	AxiosError.from = function(error, code, config, request, response, customProps) {
	  var axiosError = Object.create(prototype);

	  utils.toFlatObject(error, axiosError, function filter(obj) {
	    return obj !== Error.prototype;
	  });

	  AxiosError.call(axiosError, error.message, code, config, request, response);

	  axiosError.name = error.name;

	  customProps && Object.assign(axiosError, customProps);

	  return axiosError;
	};

	AxiosError_1 = AxiosError;
	return AxiosError_1;
}

var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var toFormData_1;
var hasRequiredToFormData;

function requireToFormData () {
	if (hasRequiredToFormData) return toFormData_1;
	hasRequiredToFormData = 1;

	var utils = utils$9;

	/**
	 * Convert a data object to FormData
	 * @param {Object} obj
	 * @param {?Object} [formData]
	 * @returns {Object}
	 **/

	function toFormData(obj, formData) {
	  // eslint-disable-next-line no-param-reassign
	  formData = formData || new FormData();

	  var stack = [];

	  function convertValue(value) {
	    if (value === null) return '';

	    if (utils.isDate(value)) {
	      return value.toISOString();
	    }

	    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
	      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
	    }

	    return value;
	  }

	  function build(data, parentKey) {
	    if (utils.isPlainObject(data) || utils.isArray(data)) {
	      if (stack.indexOf(data) !== -1) {
	        throw Error('Circular reference detected in ' + parentKey);
	      }

	      stack.push(data);

	      utils.forEach(data, function each(value, key) {
	        if (utils.isUndefined(value)) return;
	        var fullKey = parentKey ? parentKey + '.' + key : key;
	        var arr;

	        if (value && !parentKey && typeof value === 'object') {
	          if (utils.endsWith(key, '{}')) {
	            // eslint-disable-next-line no-param-reassign
	            value = JSON.stringify(value);
	          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
	            // eslint-disable-next-line func-names
	            arr.forEach(function(el) {
	              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
	            });
	            return;
	          }
	        }

	        build(value, fullKey);
	      });

	      stack.pop();
	    } else {
	      formData.append(parentKey, convertValue(data));
	    }
	  }

	  build(obj);

	  return formData;
	}

	toFormData_1 = toFormData;
	return toFormData_1;
}

var settle;
var hasRequiredSettle;

function requireSettle () {
	if (hasRequiredSettle) return settle;
	hasRequiredSettle = 1;

	var AxiosError = requireAxiosError();

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(new AxiosError(
	      'Request failed with status code ' + response.status,
	      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
	      response.config,
	      response.request,
	      response
	    ));
	  }
	};
	return settle;
}

var cookies;
var hasRequiredCookies;

function requireCookies () {
	if (hasRequiredCookies) return cookies;
	hasRequiredCookies = 1;

	var utils = utils$9;

	cookies = (
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
	return cookies;
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var parseHeaders;
var hasRequiredParseHeaders;

function requireParseHeaders () {
	if (hasRequiredParseHeaders) return parseHeaders;
	hasRequiredParseHeaders = 1;

	var utils = utils$9;

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
	parseHeaders = function parseHeaders(headers) {
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
	return parseHeaders;
}

var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;

function requireIsURLSameOrigin () {
	if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
	hasRequiredIsURLSameOrigin = 1;

	var utils = utils$9;

	isURLSameOrigin = (
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
	return isURLSameOrigin;
}

var CanceledError_1;
var hasRequiredCanceledError;

function requireCanceledError () {
	if (hasRequiredCanceledError) return CanceledError_1;
	hasRequiredCanceledError = 1;

	var AxiosError = requireAxiosError();
	var utils = utils$9;

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function CanceledError(message) {
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
	  this.name = 'CanceledError';
	}

	utils.inherits(CanceledError, AxiosError, {
	  __CANCEL__: true
	});

	CanceledError_1 = CanceledError;
	return CanceledError_1;
}

var parseProtocol;
var hasRequiredParseProtocol;

function requireParseProtocol () {
	if (hasRequiredParseProtocol) return parseProtocol;
	hasRequiredParseProtocol = 1;

	parseProtocol = function parseProtocol(url) {
	  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	  return match && match[1] || '';
	};
	return parseProtocol;
}

var xhr;
var hasRequiredXhr;

function requireXhr () {
	if (hasRequiredXhr) return xhr;
	hasRequiredXhr = 1;

	var utils = utils$9;
	var settle = requireSettle();
	var cookies = requireCookies();
	var buildURL = buildURL$1;
	var buildFullPath = buildFullPath$1;
	var parseHeaders = requireParseHeaders();
	var isURLSameOrigin = requireIsURLSameOrigin();
	var transitionalDefaults = transitional;
	var AxiosError = requireAxiosError();
	var CanceledError = requireCanceledError();
	var parseProtocol = requireParseProtocol();

	xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	    var responseType = config.responseType;
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }

	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }

	    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);

	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
	        request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(function _resolve(value) {
	        resolve(value);
	        done();
	      }, function _reject(err) {
	        reject(err);
	        done();
	      }, response);

	      // Clean up request
	      request = null;
	    }

	    if ('onloadend' in request) {
	      // Use onloadend if available
	      request.onloadend = onloadend;
	    } else {
	      // Listen for ready state to emulate onloadend
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
	        // readystate handler is calling before onerror or ontimeout handlers,
	        // so we should call onloadend on the next 'tick'
	        setTimeout(onloadend);
	      };
	    }

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = config.transitional || transitionalDefaults;
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(new AxiosError(
	        timeoutErrorMessage,
	        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
	        config,
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
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
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (responseType && responseType !== 'json') {
	      request.responseType = config.responseType;
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken || config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function(cancel) {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
	        request.abort();
	        request = null;
	      };

	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }

	    if (!requestData) {
	      requestData = null;
	    }

	    var protocol = parseProtocol(fullPath);

	    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
	      return;
	    }


	    // Send the request
	    request.send(requestData);
	  });
	};
	return xhr;
}

var _null;
var hasRequired_null;

function require_null () {
	if (hasRequired_null) return _null;
	hasRequired_null = 1;
	// eslint-disable-next-line strict
	_null = null;
	return _null;
}

var utils$5 = utils$9;
var normalizeHeaderName = normalizeHeaderName$1;
var AxiosError$1 = requireAxiosError();
var transitionalDefaults = transitional;
var toFormData = requireToFormData();

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = requireXhr();
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = requireXhr();
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils$5.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
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
  maxBodyLength: -1,

  env: {
    FormData: require_null()
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$4 = utils$9;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1;
var hasRequiredIsCancel;

function requireIsCancel () {
	if (hasRequiredIsCancel) return isCancel$1;
	hasRequiredIsCancel = 1;

	isCancel$1 = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};
	return isCancel$1;
}

var utils$3 = utils$9;
var transformData = transformData$1;
var isCancel = requireIsCancel();
var defaults$1 = defaults_1;
var CanceledError = requireCanceledError();

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$3.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
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
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$2 = utils$9;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var data;
var hasRequiredData;

function requireData () {
	if (hasRequiredData) return data;
	hasRequiredData = 1;
	data = {
	  "version": "0.27.2"
	};
	return data;
}

var VERSION = requireData().version;
var AxiosError = requireAxiosError();

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator$1 = {
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$1 = utils$9;
var buildURL = buildURL$1;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath = buildFullPath$1;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios_1 = Axios$1;

var CancelToken_1;
var hasRequiredCancelToken;

function requireCancelToken () {
	if (hasRequiredCancelToken) return CancelToken_1;
	hasRequiredCancelToken = 1;

	var CanceledError = requireCanceledError();

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

	  // eslint-disable-next-line func-names
	  this.promise.then(function(cancel) {
	    if (!token._listeners) return;

	    var i;
	    var l = token._listeners.length;

	    for (i = 0; i < l; i++) {
	      token._listeners[i](cancel);
	    }
	    token._listeners = null;
	  });

	  // eslint-disable-next-line func-names
	  this.promise.then = function(onfulfilled) {
	    var _resolve;
	    // eslint-disable-next-line func-names
	    var promise = new Promise(function(resolve) {
	      token.subscribe(resolve);
	      _resolve = resolve;
	    }).then(onfulfilled);

	    promise.cancel = function reject() {
	      token.unsubscribe(_resolve);
	    };

	    return promise;
	  };

	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new CanceledError(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Subscribe to the cancel signal
	 */

	CancelToken.prototype.subscribe = function subscribe(listener) {
	  if (this.reason) {
	    listener(this.reason);
	    return;
	  }

	  if (this._listeners) {
	    this._listeners.push(listener);
	  } else {
	    this._listeners = [listener];
	  }
	};

	/**
	 * Unsubscribe from the cancel signal
	 */

	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
	  if (!this._listeners) {
	    return;
	  }
	  var index = this._listeners.indexOf(listener);
	  if (index !== -1) {
	    this._listeners.splice(index, 1);
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

	CancelToken_1 = CancelToken;
	return CancelToken_1;
}

var spread;
var hasRequiredSpread;

function requireSpread () {
	if (hasRequiredSpread) return spread;
	hasRequiredSpread = 1;

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
	spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};
	return spread;
}

var isAxiosError;
var hasRequiredIsAxiosError;

function requireIsAxiosError () {
	if (hasRequiredIsAxiosError) return isAxiosError;
	hasRequiredIsAxiosError = 1;

	var utils = utils$9;

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	isAxiosError = function isAxiosError(payload) {
	  return utils.isObject(payload) && (payload.isAxiosError === true);
	};
	return isAxiosError;
}

var utils = utils$9;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Expose Cancel & CancelToken
axios$1.CanceledError = requireCanceledError();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.VERSION = requireData().version;
axios$1.toFormData = requireToFormData();

// Expose AxiosError class
axios$1.AxiosError = requireAxiosError();

// alias for CanceledError for backward compatibility
axios$1.Cancel = axios$1.CanceledError;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = requireSpread();

// Expose isAxiosError
axios$1.isAxiosError = requireIsAxiosError();

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axios$2.exports.default = axios$1;

(function (module) {
	module.exports = axios$2.exports;
} (axios$3));

var axios = /*@__PURE__*/getDefaultExportFromCjs(axios$3.exports);

var Config = /** @class */ (function () {
    function Config() {
    }
    var _a;
    _a = Config;
    Config.authToken = '';
    Config.setAuthToken = function (token) {
        _a.authToken = token;
    };
    Config.getAuthToken = function () {
        return _a.authToken;
    };
    return Config;
}());

var RequestTypes = /** @class */ (function () {
    function RequestTypes() {
    }
    RequestTypes.GET = "GET";
    RequestTypes.POST = "POST";
    RequestTypes.PUT = "PUT";
    RequestTypes.DELETE = "DELETE";
    return RequestTypes;
}());

var FormData$1 = require('form-data');
var blobFromSync = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!file) {
            throw new Error('Passed "file" cannot be empty!');
        }
        if (typeof file === 'string') {
            return [2 /*return*/, Promise.resolve().then(function () { return $empty$$1; }).then(function (f) { return f.blobFromSync(file); })];
        }
        if (file instanceof File || file instanceof Blob) {
            return [2 /*return*/, file];
        }
        throw new Error('Passed "file" is not a valid File object!');
    });
}); };
var Requests = /** @class */ (function () {
    function Requests() {
    }
    Requests.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    };
    Requests.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    var _a;
    _a = Requests;
    Requests.post = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.POST, data, query, options);
    };
    Requests.put = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.PUT, data, query, options);
    };
    Requests.get = function (url, query, options) {
        return _a._sendRequest(url, RequestTypes.GET, null, query, options);
    };
    Requests.delete = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.DELETE, data, query, options);
    };
    Requests.upload = function (filename, file, url, data, query, options) {
        var formData = new FormData$1();
        formData.append(filename, file);
        Object.keys(data).forEach(function (key) { return formData.append(key, data[key]); });
        return _a._sendRequest(url, RequestTypes.POST, formData, query, options);
    };
    Requests.uploadChunks = function (id, file_location, url, data, query, options) {
        return _a._uploadChunks(url, id, file_location);
        //const formData = new FormData();
        //Object.keys(data).forEach(key => formData.append(key, data[key]));
        //return this._sendRequest(url, RequestTypes.POST, formData, query, options);
    };
    Requests._sendRequest = function (url, method, data, query, options) {
        var queryParameters = '';
        if (query) {
            queryParameters = "?" + _a.toQueryString(query);
        }
        var body = null;
        if (data instanceof FormData$1 && data !== null) {
            body = data;
        }
        else if (typeof data === 'object' && data !== null) {
            body = data;
        }
        var route = "https://bw.bingewave.com" + url + queryParameters;
        ({
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            //method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        });
        var response = axios({
            method: method,
            url: route,
            data: body,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        });
        return response;
    };
    Requests._uploadChunks = function (url, id, file_location) { return __awaiter(void 0, void 0, void 0, function () {
        var token, config, file, chunkSize, totalSize, chunk_id, final_response, formHeaders, start, chunk, form, chunkArray, buffered, upload_id, headers, result, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    url = "https://bw.bingewave.com" + url;
                    token = Config.getAuthToken();
                    config = {
                        maxContentLength: Infinity,
                        maxBodyLength: Infinity,
                    };
                    return [4 /*yield*/, blobFromSync(file_location)];
                case 1:
                    file = _b.sent();
                    chunkSize = 10000000;
                    totalSize = file.size;
                    chunk_id = id + '-' + this.makeid(5);
                    final_response = null;
                    formHeaders = null;
                    start = 0;
                    _b.label = 2;
                case 2:
                    if (!(start < file.size)) return [3 /*break*/, 8];
                    chunk = file.slice(start, start + chunkSize);
                    form = new FormData$1();
                    return [4 /*yield*/, chunk.arrayBuffer()];
                case 3:
                    chunkArray = _b.sent();
                    buffered = Buffer.from(chunkArray);
                    upload_id = this.makeid(10);
                    form.append('file', buffered, upload_id);
                    form.append('chunked', 1);
                    form.append('chunked_id', chunk_id);
                    form.append('totalSize', totalSize);
                    if (form.getHeaders) {
                        formHeaders = form.getHeaders();
                    }
                    headers = __assign({ "Authorization": "Bearer ".concat(token) }, formHeaders);
                    // @ts-ignore
                    config.headers = headers;
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, axios.post(url, form, config).then(function (response) {
                            if (response.data && response.data.status == "success") {
                                return response.data;
                            }
                            else if (response.data && response.data.status == "failure") {
                                return response.data;
                            }
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                case 5:
                    result = _b.sent();
                    final_response = result;
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7:
                    start += chunkSize;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/, final_response];
            }
        });
    }); };
    Requests.toQueryString = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    return Requests;
}());

/**
 * Auth
 *
 * The class for authorization into the backend.
 */
var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * Attempts to the log the user in, which will return their data and auth token
     *
     * @see [Authorization  Login - BingeWave](https://developers.bingewave.com/docs/auth#login)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.login = function (data, query, options) {
        return Requests.post(this.routeLogin.route, data, query, options);
    };
    /**
     * Attempts to register the user and will return their information along with an auth token.
     *
     * @see [Authorization Register - BingeWave](https://developers.bingewave.com/docs/auth#register)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.register = function (data, query, options) {
        return Requests.post(this.routeRegister.route, data, query, options);
    };
    /**
     * Attempts to login a user to an account that will be associated with an organizer. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Login To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#logintoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.loginToOrganizer = function (data, query, options) {
        return Requests.post(this.routeLoginToOrganizer.route, data, query, options);
    };
    /**
     * Attempts to register a user that will be associated with an organizer account. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Register To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#registertoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.registerToOrganizer = function (data, query, options) {
        return Requests.post(this.routeRegisterToOrganizer.route, data, query, options);
    };
    Auth.routeLogin = {
        route: "/auth/login",
        method: RequestTypes.POST
    };
    Auth.routeRegister = {
        route: "/auth/register",
        method: RequestTypes.POST
    };
    Auth.routeForgotPassword = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };
    Auth.routeLoginToOrganizer = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };
    Auth.routeRegisterToOrganizer = {
        route: "/registerToOrganizer",
        method: RequestTypes.POST
    };
    return Auth;
}());

var Accounts = /** @class */ (function () {
    function Accounts() {
    }
    /**
     * Retrieve the profile related to a user by their ID.
     *
     * @see [Accounts Profile - BingeWave](https://developers.bingewave.com/docs/accounts#profile)
     *
     * @param user_id The id of the user whose profile you want to retrieve
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getProfile = function (user_id, query, options) {
        var route = this.routeProfile.route.replaceAll('{id}', user_id);
        return Requests.get(route, query, options);
    };
    /**
     * Retrives a list of accounts that is associated with an organizer's account. The auth token used
     * must be related to the organizer account.
     *
     * @see [Accounts List - BingeWave](https://developers.bingewave.com/docs/accounts#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getAccounts = function (query, options) {
        var route = this.routeList.route;
        return Requests.get(route, query, options);
    };
    /**
     * For users that have either RSVPed or purchased tickets to an event, this will list their tickets.
     *
     * @see [Accounts My Tickets - BingeWave](https://developers.bingewave.com/docs/accounts#mytickets)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getMyTickets = function (query, options) {
        var route = this.routeMyTickets.route;
        return Requests.get(route, query, options);
    };
    /**
     * Retrieves the current users account based the auth token being used.
     *
     * @see [Accounts Me - BingeWave](https://developers.bingewave.com/docs/accounts#me)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getMe = function (query, options) {
        var route = this.routeMe.route;
        return Requests.get(route, query, options);
    };
    /**
     * Upate a users account based on the users auth token. Only a user is able to update thier own account.
     *
     * @see [Accounts Update Account - BingeWave](https://developers.bingewave.com/docs/accounts#update)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.updateAccount = function (data, query, options) {
        var route = this.routeUpdate.route;
        return Requests.put(route, data, query, options);
    };
    /**
     * Sets preference item for a user. Items are stored in a key-value pair.
     *
     * @see [Accounts Set Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setpreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.setPreference = function (user_id, data, query, options) {
        var route = this.routeSetPreference.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    /**
     * Removes a preference key-value pair that has been set for the user.
     *
     * @see [Accounts Remove Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.removePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemovePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests.delete(route, data, query, options);
    };
    /**
     * Sets a secure preference item for a user. in which items are stored in a key-value pair. Secure preferences
     * cannot be read by others, and only the current user is able to access this preference. Store sensitive information
     * such as tokens in this field.
     *
     * @see [Accounts Set Secure Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setsecurepreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.setSecurePreference = function (user_id, data, query, options) {
        var route = this.routeSetSecurePreference.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    /**
     * Removes a secure preference key-value pair that has been set for the user. With a secure preference, only
     * the current user is able to access and remove the preference.
     *
     * @see [Accounts Remove Secure Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removesecurepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.removeSecurePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemoveSecurePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests.delete(route, data, query, options);
    };
    Accounts.routeProfile = {
        route: "/accounts/{id}",
        method: RequestTypes.GET
    };
    Accounts.routeList = {
        route: "/accounts",
        method: RequestTypes.GET
    };
    Accounts.routeUpdate = {
        route: "/accounts",
        method: RequestTypes.PUT
    };
    Accounts.routeMyTickets = {
        route: "/accounts/mytickets",
        method: RequestTypes.GET
    };
    Accounts.routeMe = {
        route: "/accounts/me",
        method: RequestTypes.GET
    };
    Accounts.routeSetPreference = {
        route: "/accounts/{id}/setPreference",
        method: RequestTypes.POST
    };
    Accounts.routeRemovePreference = {
        route: "/accounts/{id}/removePreference/{key}",
        method: RequestTypes.DELETE
    };
    Accounts.routeSetSecurePreference = {
        route: "/accounts/{id}/setSecurePreference",
        method: RequestTypes.POST
    };
    Accounts.routeRemoveSecurePreference = {
        route: "/accounts/{id}/removeSecurePreference/{key}",
        method: RequestTypes.DELETE
    };
    Accounts.routeSetProfileImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    Accounts.routeSetAvatarImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    return Accounts;
}());

/**
 * Live Events
 *
 * All video conferencing, audio conferencing, live streams and broadcasts are considered live events. Every live event
 * can be managed via the API. Use the API routes for managing live events.
 */
var Events = /** @class */ (function () {
    function Events() {
    }
    /**
     * Creates a live event. All video conferencing, audio conferencing, live streams and brodcasts are considered live events.
     *
     * @see [Live Events - Create](https://developers.bingewave.com/docs/events#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.createEvent = function (data, query, options) {
        return Requests.post(this.routeCreateEvent.route, data, query, options);
    };
    /**
     * View a single live event's data.
     *
     * @see [Live Events - Create](https://developers.bingewave.com/docs/events#view)
     *
     * @param event_id The id of the live event
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.viewEvent = function (event_id, query, options) {
        var route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    /**
     * List multiple live events that is associated with an organizer's account. Use the pagination to change
     * what data is returned.
     *
     * @see [Live Events - View Single](https://developers.bingewave.com/docs/events#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getEvents = function (query, options) {
        return Requests.get(this.routeListEvents.route, query, options);
    };
    /**
     * Update a live event's information.
     *
     * @see [Live Events - Update](https://developers.bingewave.com/docs/events#update)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateEvent = function (event_id, data, query, options) {
        var route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    /**
     * Update the design elements associated with a live event.
     *
     * @see [Live Events - Update Design](https://developers.bingewave.com/docs/events#design)
     *
     * @param event_id The id of the live event
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateEventDesign = function (event_id, data, query, options) {
        var route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    /**
     * Delete a live event so that it is no longer accessible.
     *
     * @see [Live Events - Delete](https://developers.bingewave.com/docs/events#delete)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteEvent = function (event_id, data, query, options) {
        var route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    /**
     * Retrieve a list of chat messages associated with the live event.
     *
     * @see [Live Events - Get Chats](https://developers.bingewave.com/docs/chats#list)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getChatMessages = function (event_id, query, options) {
        var route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    /**
     * Retrieve a single chat message that was sent.
     *
     * @see [Live Events - Retrieve Single Message](https://developers.bingewave.com/docs/chats#view)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getSingleChatMessage = function (event_id, message_id, query, options) {
        var route = this.routeViewMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.get(route, query, options);
    };
    /**
     * Send a new message that will appear in the chat stream.
     *
     * @see [Live Events - Send Message](https://developers.bingewave.com/docs/chats#send)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.sendChatMessage = function (event_id, data, query, options) {
        var route = this.routeSendMessageEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    /**
     * Update a chat message that is associated with an event
     *
     * @see [Live Events - Update Message](https://developers.bingewave.com/docs/chats#update)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeUpdateMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.put(route, data, query, options);
    };
    /**
     * Deletes a chat message so that it no longer shows up in the feed.
     *
     * @see [Live Events - Delete Message](https://developers.bingewave.com/docs/chats#delete)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeDeleteMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.delete(route, data, query, options);
    };
    Events.getWidgets = function (event_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.addWidget = function (event_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.updateWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Events.deleteWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Events.setWidgetPositioningOption = function (event_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests.post(route, data, query, options);
    };
    Events.getWidgetPositioningOption = function (event_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.startBroadcast = function (event_id, data, query, options) {
        var route = this.routeStartBroadcasting.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopBroadcast = function (event_id, data, query, options) {
        var route = this.routeStopBroadcasting.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.startRecording = function (event_id, data, query, options) {
        var route = this.routeStartRecording.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopRecording = function (event_id, data, query, options) {
        var route = this.routeStopRecording.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.startStreaming = function (event_id, data, query, options) {
        var route = this.routeStartStream.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopStreaming = function (event_id, data, query, options) {
        var route = this.routeStopStream.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.cancelEvent = function (event_id, data, query, options) {
        var route = this.routeCancelEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setState = function (event_id, data, query, options) {
        var route = this.routeSetState.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.getState = function (event_id, key, query, options) {
        var route = this.routeGetState.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.get(route, query, options);
    };
    Events.incrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeIncrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.post(route, data, query, options);
    };
    Events.decrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeDecrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.post(route, data, query, options);
    };
    Events.createGroup = function (event_id, data, query, options) {
        var route = this.routeCreateGroup.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.updateGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeUpdateGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.put(route, data, query, options);
    };
    Events.listGroup = function (event_id, group_id, query, options) {
        var route = this.routeListGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.get(route, query, options);
    };
    Events.viewGroup = function (event_id, group_id, query, options) {
        var route = this.routeViewGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.get(route, query, options);
    };
    Events.deleteGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeDeleteGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.post(route, data, query, options);
    };
    Events.registerAttendee = function (event_id, data, query, options) {
        var route = this.routeRegisterAttendee.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.listTickets = function (event_id, query, options) {
        var route = this.routeListTickets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.hasTicket = function (event_id, account_id, query, options) {
        var route = this.routeHasTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{account_id}', account_id);
        return Requests.get(route, query, options);
    };
    Events.viewTicket = function (event_id, ticket_id, query, options) {
        var route = this.routeViewTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests.get(route, query, options);
    };
    Events.refundTicket = function (event_id, ticket_id, data, query, options) {
        var route = this.routeRefundTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToAttenndees = function (user_id, data, query, options) {
        var route = this.routeAddUser.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Events.removeUserFromAttendees = function (user_id, data, query, options) {
        var route = this.routeRemoveUser.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Events.getParticipants = function (event_id, query, options) {
        var route = this.routeGetParticipants.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.onlineUsers = function (event_id, query, options) {
        var route = this.routeOnlineUsers.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.getUserStatus = function (event_id, query, options) {
        var route = this.routeGetUserStatus.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.makeModerator = function (event_id, data, query, options) {
        var route = this.routeMakeModerator.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.removeAsModerator = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsModerator.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.makePanelist = function (event_id, data, query, options) {
        var route = this.routeMakePanelist.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.removePanelist = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsPanelist.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.makeParticipant = function (data, query, options) {
        return Requests.post(this.routeMakeParticipant.route, data, query, options);
    };
    Events.removeParticipant = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveParticipant.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.blockUser = function (event_id, data, query, options) {
        var route = this.routeBlockUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.unblockUser = function (event_id, message_id, data, query, options) {
        var route = this.routeUnblockUser.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.delete(route, data, query, options);
    };
    Events.turnOnUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOnVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.turnOffUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOffVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.unmuteUserAduio = function (event_id, data, query, options) {
        var route = this.routeUnmuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.muteUserAduio = function (event_id, data, query, options) {
        var route = this.routeMuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.shareUserDesktop = function (event_id, data, query, options) {
        var route = this.routeShareUserDesktop.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.shareUserVideo = function (event_id, data, query, options) {
        var route = this.routeShareUserVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.hideUserVideo = function (event_id, data, query, options) {
        var route = this.routeHideUserVideoFromAll.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToStage = function (event_id, data, query, options) {
        var route = this.routeAddUserToStage.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToAudience = function (event_id, data, query, options) {
        var route = this.routeAddUserToAudience.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.connectUser = function (event_id, data, query, options) {
        var route = this.routeConnectUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.disconnectUser = function (event_id, data, query, options) {
        var route = this.routeDisconnectUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setPersonalLayout = function (event_id, data, query, options) {
        var route = this.routeSetPersonalLayout.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setVideoInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeVideoDevice.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setAudioInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeAudioDevice.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.routeDisconnectUser = {
        route: "/events/{id}/disconnectUser",
        method: RequestTypes.POST
    };
    Events.routeConnectUser = {
        route: "/events/{id}/connectUser",
        method: RequestTypes.POST
    };
    Events.routeAddUserToAudience = {
        route: "/events/{id}/removeUserFromStage",
        method: RequestTypes.POST
    };
    Events.routeAddUserToStage = {
        route: "/events/{id}/addUserToStage",
        method: RequestTypes.POST
    };
    Events.routeHideUserVideoFromAll = {
        route: "/events/{id}/setUserVideoToHidden",
        method: RequestTypes.POST
    };
    Events.routeShareUserVideo = {
        route: "/events/{id}/shareUserVideo",
        method: RequestTypes.POST
    };
    Events.routeShareUserDesktop = {
        route: "/events/{id}/shareUserDesktop",
        method: RequestTypes.POST
    };
    Events.routeMuteUserAudio = {
        route: "/events/{id}/setUserAudioMute",
        method: RequestTypes.POST
    };
    Events.routeUnmuteUserAudio = {
        route: "/events/{id}/setUserAudioUnmute",
        method: RequestTypes.POST
    };
    Events.routeTurnOffVideo = {
        route: "/events/{id}/setUserVideoOff",
        method: RequestTypes.POST
    };
    Events.routeTurnOnVideo = {
        route: "/events/{id}/setUserVideoOn",
        method: RequestTypes.POST
    };
    Events.routeUnblockUser = {
        route: "/events/{id}/unblockAccount",
        method: RequestTypes.DELETE
    };
    Events.routeBlockUser = {
        route: "/events/{id}/blockAccount",
        method: RequestTypes.POST
    };
    Events.routeRemoveParticipant = {
        route: "/events/{id}/removeParticipant",
        method: RequestTypes.DELETE
    };
    Events.routeMakeParticipant = {
        route: "/events/{id}/makeParticipant",
        method: RequestTypes.POST
    };
    Events.routeRemoveAsModerator = {
        route: "/events/{id}/removeModerator",
        method: RequestTypes.DELETE
    };
    Events.routeMakeModerator = {
        route: "/events/{id}/makeModerator",
        method: RequestTypes.POST
    };
    Events.routeRemoveAsPanelist = {
        route: "/events/{id}/removePanelist",
        method: RequestTypes.DELETE
    };
    Events.routeMakePanelist = {
        route: "/events/{id}/makePanelist",
        method: RequestTypes.POST
    };
    Events.routeGetUserStatus = {
        route: "/events/{id}/getUserStatus/{subid}",
        method: RequestTypes.GET
    };
    Events.routeOnlineUsers = {
        route: "/events/{id}/getOnlineUsers",
        method: RequestTypes.GET
    };
    Events.routeGetParticipants = {
        route: "/events/{id}/getParticipants",
        method: RequestTypes.GET
    };
    Events.routeRemoveUser = {
        route: "/events/{id}/removeUserFromAttendees",
        method: RequestTypes.POST
    };
    Events.routeAddUser = {
        route: "/events/{id}/addUserToAttendees",
        method: RequestTypes.POST
    };
    Events.routeRefundTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}/refund",
        method: RequestTypes.POST
    };
    Events.routeViewTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}",
        method: RequestTypes.GET
    };
    Events.routeHasTicket = {
        route: "/events/{event_id}/hasTicket/{account_id}",
        method: RequestTypes.GET
    };
    Events.routeListTickets = {
        route: "/events/{id}/tickets",
        method: RequestTypes.GET
    };
    Events.routeRegisterAttendee = {
        route: "/events/{id}/register",
        method: RequestTypes.POST
    };
    Events.routeDeleteGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.POST
    };
    Events.routeViewGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.GET
    };
    Events.routeListGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.GET
    };
    Events.routeUpdateGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.PUT
    };
    Events.routeCreateGroup = {
        route: "/events/{id}/groups",
        method: RequestTypes.POST
    };
    Events.routeCreateEvent = {
        route: "/events",
        method: RequestTypes.POST
    };
    Events.routeListEvents = {
        route: "/events",
        method: RequestTypes.GET
    };
    Events.routeUpdateEvent = {
        route: "/events/{id}",
        method: RequestTypes.PUT
    };
    Events.routeUpdateEventDesign = {
        route: "/events/{id}/design",
        method: RequestTypes.PUT
    };
    Events.routeViewEvent = {
        route: "/events/{id}",
        method: RequestTypes.GET
    };
    Events.routeDeleteEvent = {
        route: "/events/{id}",
        method: RequestTypes.DELETE
    };
    Events.routeGetMessagesEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes.GET
    };
    Events.routeSendMessageEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes.POST
    };
    Events.routeViewMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.GET
    };
    Events.routeUpdateMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.PUT
    };
    Events.routeDeleteMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeStartStream = {
        route: "/events/{id}/startStream",
        method: RequestTypes.DELETE
    };
    Events.routeStopStream = {
        route: "/events/{id}/stopStream",
        method: RequestTypes.DELETE
    };
    Events.routeCancelEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeSetState = {
        route: "/events/{id}/setState",
        method: RequestTypes.DELETE
    };
    Events.routeGetState = {
        route: "/events/{id}/getState/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeIncrementStateBy = {
        route: "/events/{id}/incrementStateBy/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeDecrementStateBy = {
        route: "/events/{id}/decrementStateBy/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeStartBroadcasting = {
        route: "/events/{id}/startBroadcasting",
        method: RequestTypes.DELETE
    };
    Events.routeStopBroadcasting = {
        route: "/events/{id}/stopBroadcasting",
        method: RequestTypes.DELETE
    };
    Events.routeStartRecording = {
        route: "/events/{id}/startRecording",
        method: RequestTypes.DELETE
    };
    Events.routeStopRecording = {
        route: "/events/{id}/stopRecording",
        method: RequestTypes.DELETE
    };
    Events.routeListWidgets = {
        route: "/events/{id}/getWidgets",
        method: RequestTypes.DELETE
    };
    Events.routeAddWidget = {
        route: "/events/{id}/addWidget",
        method: RequestTypes.DELETE
    };
    Events.routeUpdateWidget = {
        route: "/events/{id}/updateWidget/{subid}",
        method: RequestTypes.POST
    };
    Events.routeRemoveWidget = {
        route: "/events/{id}/removeWidget/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeSetOptionsWidget = {
        route: "/events/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Events.routeGetOptionsWidget = {
        route: "/events/{id}/getWidgetPositioningOptions",
        method: RequestTypes.GET
    };
    Events.routeSetPersonalLayout = {
        route: "/events/{id}/setPersonalLayout",
        method: RequestTypes.POST
    };
    Events.routeChangeVideoDevice = {
        route: "/events/{id}/changeVideoInputDevice",
        method: RequestTypes.POST
    };
    Events.routeChangeAudioDevice = {
        route: "/events/{id}/changeAudioInputDevice",
        method: RequestTypes.POST
    };
    return Events;
}());

var Organizers = /** @class */ (function () {
    function Organizers() {
    }
    Organizers.getOrganizers = function (query, options) {
        return Requests.get(this.routeListOrganizers.route, query);
    };
    Organizers.createOrganizer = function (data, query, options) {
        return Requests.post(this.routeCreateOrganizer.route, data, query, options);
    };
    Organizers.updateOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.put(route, data, query, options);
    };
    Organizers.viewOrganizer = function (organizer_id, query, options) {
        var route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.deleteOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    };
    Organizers.setUserToRole = function (organizer_id, data, query, options) {
        var route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.removeUserFromRole = function (organizer_id, data, query, options) {
        var route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.createSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCreateSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.getSubscriptions = function (organizer_id, query, options) {
        var route = this.routeGetSubscriptions.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.viewSubscription = function (organizer_id, subscription_id, query, options) {
        var route = this.routeSingleSubscription.route.replaceAll('{id}', organizer_id);
        route = route.replaceAll('{subid}', subscription_id);
        return Requests.get(route, query, options);
    };
    Organizers.getCurrentSubscription = function (organizer_id, query, options) {
        var route = this.routeCurrentSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.cancelSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCancelSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    };
    Organizers.routeListOrganizers = {
        route: "/organizers",
        method: RequestTypes.GET
    };
    Organizers.routeCreateOrganizer = {
        route: "/organizers",
        method: RequestTypes.POST
    };
    Organizers.routeViewOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.GET
    };
    Organizers.routeUpdateOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.PUT
    };
    Organizers.routeDeleterOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.DELETE
    };
    Organizers.routeSetUserToRoleWithOganizer = {
        route: "/organizers/{id}/setUserToRole",
        method: RequestTypes.POST
    };
    Organizers.routeRemoveUserFromRoleWithOganizer = {
        route: "/organizers/{id}/removeUserFromRole",
        method: RequestTypes.POST
    };
    Organizers.routeGetSubscriptions = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes.GET
    };
    Organizers.routeSingleSubscription = {
        route: "/organizers/{id}/subscriptions/:subid",
        method: RequestTypes.GET
    };
    Organizers.routeCurrentSubscription = {
        route: "/organizers/{id}/currentSubscription",
        method: RequestTypes.GET
    };
    Organizers.routeCreateSubscription = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes.POST
    };
    Organizers.routeCancelSubscription = {
        route: "/organizers/{id}/subscriptions/{subid}",
        method: RequestTypes.DELETE
    };
    return Organizers;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    Templates.getTemplates = function (query, options) {
        return Requests.get(this.routeListTemplate.route, query);
    };
    Templates.createTemplate = function (data, query, options) {
        return Requests.post(this.routeCreateTemplate.route, data, query, options);
    };
    Templates.viewTemplate = function (template_id, query, options) {
        var route = this.routeViewTemplate.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.updateTemplate = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplate.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.updateTemplateDesign = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.deleteTemplate = function (template_id, data, query, options) {
        var route = this.routeDeleteTemplate.route.replaceAll('{id}', template_id);
        return Requests.delete(route, data, query, options);
    };
    Templates.getWidgets = function (template_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.addWidget = function (template_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    };
    Templates.updateWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Templates.deleteWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Templates.setWidgetPositioningOption = function (template_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests.post(route, data, query, options);
    };
    Templates.getWidgetPositioningOption = function (template_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.saveEventToTemplate = function (template_id, data, query, options) {
        var route = this.routeSaveEventToTemplate.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    };
    Templates.routeCreateTemplate = {
        route: "/templates",
        method: RequestTypes.POST
    };
    Templates.routeUpdateTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeUpdateTemplateDesign = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeViewTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.GET
    };
    Templates.routeListTemplate = {
        route: "/templates",
        method: RequestTypes.GET
    };
    Templates.routeDeleteTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes.POST
    };
    Templates.routeTemplateGetWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes.GET
    };
    Templates.routeTemplateRemoveWidget = {
        route: "/templates/{id}/removeWidget",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes.PUT
    };
    Templates.routeTemplateSetWidgetPositioningOptions = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSeMainImage = {
        route: "/templates/{id}/uploadTemplateImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetWatermarkImage = {
        route: "/templates/{id}/uploadTemplateWatermarkImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetOverlayImage = {
        route: "/templates/{id}/uploadTemplateOverlayImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetBackgroundImage = {
        route: "/templates/{id}/setBackgroundImage",
        method: RequestTypes.POST
    };
    Templates.routeListWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes.DELETE
    };
    Templates.routeAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes.DELETE
    };
    Templates.routeUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeRemoveWidget = {
        route: "/templates/{id}/removeWidget/{subid}",
        method: RequestTypes.DELETE
    };
    Templates.routeSetOptionsWidget = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeGetOptionsWidget = {
        route: "/templates/{id}/getWidgetPositioningOptions",
        method: RequestTypes.GET
    };
    Templates.routeSaveEventToTemplate = {
        route: "/templates/{id}/saveEventToTemplate",
        method: RequestTypes.POST
    };
    return Templates;
}());

var Widgets = /** @class */ (function () {
    function Widgets() {
    }
    Widgets.createWidget = function (data, query, options) {
        return Requests.post(this.routeCreateWidget.route, data, query, options);
    };
    Widgets.viewWidget = function (widget_id, query, options) {
        var route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests.get(route, query, options);
    };
    Widgets.getWidgets = function (query, options) {
        return Requests.get(this.routeListWidget.route, query, options);
    };
    Widgets.updateWidget = function (widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Widgets.deleteWidget = function (widget_id, data, query, options) {
        var route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Widgets.routeCreateWidget = {
        route: "/widgets",
        method: RequestTypes.POST
    };
    Widgets.routeListWidget = {
        route: "/widgets",
        method: RequestTypes.GET
    };
    Widgets.routeUpdateWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.PUT
    };
    Widgets.routeViewWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.GET
    };
    Widgets.routeDeleteWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetMainImage = {
        route: "/widgets/{id}/setMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routesetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    return Widgets;
}());

/**
 * Videos
 *
 * Videos and pre-recorded content are used interchangeably for the API. This class will allow you
 * to manage the videos for a given organizer account.
 */
var Videos = /** @class */ (function () {
    function Videos() {
    }
    /**
     * Create a new video (aka: pre-recorded content)
     *
     * @see [Videos Create Video - BingeWave](https://developers.bingewave.com/docs/videos#create)
     *
     * @param data The data that will be used to created the video
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.createVideo = function (data, query, options) {
        return Requests.post(this.routeCreateVideo.route, data, query, options);
    };
    /**
     * Update a video/pre-recorded content that has been previously created.
     *
     * @see [Videos Update Video - BingeWave](https://developers.bingewave.com/docs/videos#update)
     *
     * @param video_id The id of the video
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.updateVideo = function (video_id, data, query, options) {
        var route = this.routeUpdateVideo.route.replaceAll('{id}', video_id);
        return Requests.put(route, data, query, options);
    };
    /**
     * Retrieves a list of videos/pre-recorded content that have previously uploaded. The list
     * can be paginated and sorted with the query options.
     *
     *  @see [Videos Create Video - BingeWave](https://developers.bingewave.com/docs/videos#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.listVideos = function (query, options) {
        return Requests.get(this.routeListVideo.route, query, options);
    };
    /**
     * Retrieve a single video/pre-recorded content that has been uploaded.
     *
     *  @see [Videos Single Video - BingeWave](https://developers.bingewave.com/docs/videos#view)
     *
     * @param video_id The id of the video you want to retrieve.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.viewVideo = function (video_id, query, options) {
        var route = this.routeViewVideo.route.replaceAll('{id}', video_id);
        return Requests.get(route, query, options);
    };
    /**
     * Remove pre-recorded content/video so that it is no longer accessible.
     *
     * @see [Videos Delete Video - BingeWave](https://developers.bingewave.com/docs/videos#delete)
     *
     * @param video_id The id of the video.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.deleteVideo = function (video_id, data, query, options) {
        var route = this.routeDeleteVideo.route.replaceAll('{id}', video_id);
        return Requests.delete(route, data, query, options);
    };
    /**
     * Uploads the video file that will be used as the main video for the pre-recorded content.
     *
     * @see [Videos Set Main Video File - BingeWave](https://developers.bingewave.com/docs/videomedia#mainvideo)
     *
     * @param file Either the location of the file OR a file object. If in a browser, pass in the file object. If executing on a node backend, pass in the location of the file on the server.
     * @param video_id The id of the video this be the main video for.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.uploadMainVideo = function (file, video_id, data, query, options) {
        var route = this.routeUploadMainVideo.route.replaceAll('{id}', video_id);
        return Requests.uploadChunks(video_id, file, route, data, query, options);
    };
    /**
     * Uploads the video file that will be used as the trailer/preview for the pre-recorded content.
     *
     * @see [Videos Set Main Video File - BingeWave](https://developers.bingewave.com/docs/videomedia#previewvideo)
     *
     * @param file Either the location of the file OR a file object. If in a browser, pass in the file object. If executing on a node backend, pass in the location of the file on the server.
     * @param video_id The id of the video this be the main video for.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Videos.uploadPreviewVideo = function (file, video_id, data, query, options) {
        var route = this.routePreviewVideo.route.replaceAll('{id}', video_id);
        return Requests.uploadChunks(video_id, file, route, data, query, options);
    };
    /**
     * Sets the main image for the video/pre-recorded content.
     * @param video_id
     * @param filename
     * @param file
     * @param data
     * @param query
     * @param options
     * @returns
     */
    Videos.uploadImage = function (video_id, filename, file, data, query, options) {
        var route = this.routeSetMainImage.route.replaceAll('{id}', video_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Videos.routeCreateVideo = {
        route: "/videos",
        method: RequestTypes.POST
    };
    Videos.routeUpdateVideo = {
        route: "/videos/{id}",
        method: RequestTypes.PUT
    };
    Videos.routeListVideo = {
        route: "/videos",
        method: RequestTypes.GET
    };
    Videos.routeViewVideo = {
        route: "/videos/{id}",
        method: RequestTypes.GET
    };
    Videos.routeDeleteVideo = {
        route: "/videos/{id}",
        method: RequestTypes.DELETE
    };
    Videos.routeMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes.POST
    };
    Videos.routeUploadMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes.POST
    };
    Videos.routePreviewVideo = {
        route: "/videos/{id}/setPreviewVideoFile",
        method: RequestTypes.POST
    };
    Videos.routeSetMainImage = {
        route: "videos/{id}/setMainImage",
        method: RequestTypes.POST
    };
    return Videos;
}());

var Products = /** @class */ (function () {
    function Products() {
    }
    Products.listProducts = function (query, options) {
        return Requests.get(this.routeListProducts.route, query, options);
    };
    Products.createProducts = function (data, query, options) {
        return Requests.post(this.routeCreateProducts.route, data, query, options);
    };
    Products.viewProducts = function (product_id, query, options) {
        var route = this.routeViewProducts.route.replaceAll('{id}', product_id);
        return Requests.get(route, query, options);
    };
    Products.updateProducts = function (product_id, data, query, options) {
        var route = this.routeUpdateProducts.route.replaceAll('{id}', product_id);
        return Requests.put(route, data, query, options);
    };
    Products.uploadImage = function (product_id, file, filename, data, query, options) {
        var route = this.routeAddImage.route.replaceAll('{id}', product_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Products.defaultImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDefaultImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests.post(route, data, query, options);
    };
    Products.deleteImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDeleteImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests.delete(route, data, query, options);
    };
    Products.routeListProducts = {
        route: "/products",
        method: RequestTypes.GET
    };
    Products.routeCreateProducts = {
        route: "/products",
        method: RequestTypes.POST
    };
    Products.routeViewProducts = {
        route: "/products/{id}",
        method: RequestTypes.GET
    };
    Products.routeUpdateProducts = {
        route: "/products/{id}",
        method: RequestTypes.PUT
    };
    Products.routeAddImage = {
        route: "/products/{id}/images",
        method: RequestTypes.POST
    };
    Products.routeDefaultImage = {
        route: "/products/{id}/images/{subid}/makeDefault",
        method: RequestTypes.POST
    };
    Products.routeDeleteImage = {
        route: "/products/{id}/images/{subid}",
        method: RequestTypes.DELETE
    };
    return Products;
}());

var BWAPI = /** @class */ (function () {
    function BWAPI() {
    }
    BWAPI.Auth = Auth;
    BWAPI.Accounts = Accounts;
    BWAPI.Config = Config;
    BWAPI.Events = Events;
    BWAPI.Organizers = Organizers;
    BWAPI.Products = Products;
    BWAPI.Templates = Templates;
    BWAPI.Widgets = Widgets;
    BWAPI.Videos = Videos;
    return BWAPI;
}());

var $empty$ = {};

var $empty$$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': $empty$
});

exports.Accounts = Accounts;
exports.Auth = Auth;
exports.BWAPI = BWAPI;
exports.Config = Config;
exports.Events = Events;
exports.Organizers = Organizers;
exports.Products = Products;
exports.Templates = Templates;
exports.Videos = Videos;
exports.Widgets = Widgets;
//# sourceMappingURL=index.js.map
