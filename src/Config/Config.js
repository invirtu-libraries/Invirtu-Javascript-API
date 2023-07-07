"use strict";
exports.__esModule = true;
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
exports["default"] = Config;
