"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
var isomorphic_form_data_1 = require("isomorphic-form-data");
var axios_1 = require("axios");
var Config_1 = require("../Config/Config");
var RequestTypes_1 = require("./RequestTypes");
var buffer_1 = require("buffer");
var blobFromSync = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!file) {
                    throw new Error('Passed "file" cannot be empty!');
                }
                if (!(typeof file === 'string')) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.resolve().then(function () { return require('fetch-blob/from'); })];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.blobFromSync(file)];
            case 2:
                if (file instanceof File || file instanceof Blob) {
                    return [2 /*return*/, file];
                }
                throw new Error('Passed "file" is not a valid File object!');
        }
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
        return _a._sendRequest(url, RequestTypes_1["default"].POST, data, query, options);
    };
    Requests.put = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes_1["default"].PUT, data, query, options);
    };
    Requests.get = function (url, query, options) {
        return _a._sendRequest(url, RequestTypes_1["default"].GET, null, query, options);
    };
    Requests["delete"] = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes_1["default"].DELETE, data, query, options);
    };
    Requests.upload = function (filename, file, url, data, query, options) {
        var formData = new isomorphic_form_data_1["default"]();
        formData.append(filename, file);
        Object.keys(data).forEach(function (key) { return formData.append(key, data[key]); });
        return _a._sendRequest(url, RequestTypes_1["default"].POST, formData, query, options);
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
        if (data instanceof isomorphic_form_data_1["default"] && data !== null) {
            body = data;
        }
        else if (typeof data === 'object' && data !== null) {
            body = data;
        }
        var route = "https://bw.bingewave.com" + url + queryParameters;
        var config = {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            //method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config_1["default"].getAuthToken()
            }
        };
        //axios.defaults.headers.common['Authorization']  = 'Bearer ' + Config.getAuthToken();
        //axios.defaults.headers.common['Accept'] = 'application/json';
        //axios.defaults.headers.common['Content-Type'] = 'application/json';
        if (body) {
            config['body'] = body;
        }
        var response = (0, axios_1["default"])({
            method: method,
            url: route,
            data: body,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config_1["default"].getAuthToken()
            }
        });
        return response;
    };
    Requests._uploadChunks = function (url, id, file_location) { return __awaiter(void 0, void 0, void 0, function () {
        var token, config, file, chunkSize, totalSize, chunk_id, final_response, formHeaders, start, chunk, form, buffered, _b, _c, upload_id, headers, result, error_1;
        return __generator(_a, function (_d) {
            switch (_d.label) {
                case 0:
                    url = "https://bw.bingewave.com" + url;
                    token = Config_1["default"].getAuthToken();
                    config = {
                        maxContentLength: Infinity,
                        maxBodyLength: Infinity
                    };
                    return [4 /*yield*/, blobFromSync(file_location)];
                case 1:
                    file = _d.sent();
                    chunkSize = 10000000;
                    totalSize = file.size;
                    chunk_id = id + '-' + this.makeid(5);
                    final_response = null;
                    formHeaders = null;
                    start = 0;
                    _d.label = 2;
                case 2:
                    if (!(start < file.size)) return [3 /*break*/, 8];
                    chunk = file.slice(start, start + chunkSize);
                    form = new isomorphic_form_data_1["default"]();
                    _c = (_b = buffer_1.Buffer).from;
                    return [4 /*yield*/, chunk.arrayBuffer()];
                case 3:
                    buffered = _c.apply(_b, [_d.sent()]);
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
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, axios_1["default"].post(url, form, config).then(function (response) {
                            if (response.data && response.data.status == "success") {
                                return response.data;
                            }
                            else if (response.data && response.data.status == "failure") {
                                return response.data;
                            }
                        })["catch"](function (error) {
                            console.error(error);
                        })];
                case 5:
                    result = _d.sent();
                    final_response = result;
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _d.sent();
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
exports["default"] = Requests;
