"use strict";
exports.__esModule = true;
exports.BWAPI = exports.Videos = exports.Widgets = exports.Templates = exports.Products = exports.Organizers = exports.Events = exports.Config = exports.Accounts = exports.Auth = void 0;
var Auth_1 = require("./Auth");
exports.Auth = Auth_1["default"];
var Accounts_1 = require("./Accounts");
exports.Accounts = Accounts_1["default"];
var Events_1 = require("./Events");
exports.Events = Events_1["default"];
var Config_1 = require("./Config");
exports.Config = Config_1["default"];
var Organizers_1 = require("./Organizers");
exports.Organizers = Organizers_1["default"];
var Templates_1 = require("./Templates");
exports.Templates = Templates_1["default"];
var Widgets_1 = require("./Widgets");
exports.Widgets = Widgets_1["default"];
var Videos_1 = require("./Videos");
exports.Videos = Videos_1["default"];
var Products_1 = require("./Products");
exports.Products = Products_1["default"];
var BWAPI = /** @class */ (function () {
    function BWAPI() {
    }
    BWAPI.Auth = Auth_1["default"];
    BWAPI.Accounts = Accounts_1["default"];
    BWAPI.Config = Config_1["default"];
    BWAPI.Events = Events_1["default"];
    BWAPI.Organizers = Organizers_1["default"];
    BWAPI.Products = Products_1["default"];
    BWAPI.Templates = Templates_1["default"];
    BWAPI.Widgets = Widgets_1["default"];
    BWAPI.Videos = Videos_1["default"];
    return BWAPI;
}());
exports.BWAPI = BWAPI;
